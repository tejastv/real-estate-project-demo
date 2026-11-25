"use client";

import { useState } from "react";
import { ArrowRight, Check, Maximize2 } from "lucide-react";
import { configurations } from "@/data/site";

export default function FloorPlanSelector() {
  const [activeId, setActiveId] = useState(configurations[0].id);
  const active = configurations.find((item) => item.id === activeId) ?? configurations[0];

  return (
    <div>
      <div className="flex flex-wrap border-b border-line" role="tablist" aria-label="Apartment configuration">
        {configurations.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={activeId === item.id}
            onClick={() => setActiveId(item.id)}
            className={`min-w-0 flex-1 border-b-2 px-3 py-4 text-left transition-colors sm:min-w-32 sm:px-5 ${activeId === item.id ? "border-olive text-charcoal" : "border-transparent text-olive hover:text-charcoal"}`}
          >
            <span className="block font-display text-2xl">{item.type}</span>
            <span className="mt-1 block text-[0.55rem] font-semibold uppercase leading-relaxed tracking-[0.08em] sm:text-[0.58rem] sm:tracking-[0.12em]">Approx. {item.area.split("–")[0]} sq.ft.</span>
          </button>
        ))}
      </div>

      <div id={active.id} className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_.6fr]">
        <div className="relative min-h-[450px] bg-[#ece9e0] p-5 sm:p-10">
          <div className="absolute left-5 top-5 flex items-center gap-2 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-olive"><Maximize2 size={13} /> Illustrative plan</div>
          <PlanSvg bedrooms={active.bedrooms.startsWith("2") ? 2 : active.bedrooms.startsWith("3") ? 3 : 4} />
          <p className="absolute bottom-4 right-5 text-[0.58rem] uppercase tracking-[0.12em] text-olive/80">Not to scale · Sample schematic</p>
        </div>

        <div className="flex flex-col justify-center bg-charcoal p-7 text-white md:p-10">
          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-champagne">{active.type} · {active.title}</p>
          <h2 className="mt-5 text-white">{active.area}</h2>
          <p className="mt-5 text-sm leading-7 text-white/75">{active.description}</p>
          <dl className="mt-7 grid grid-cols-2 gap-5 border-y border-white/15 py-6 text-xs">
            <div><dt className="text-white/65">Bedrooms</dt><dd className="mt-1 text-white/90">{active.bedrooms}</dd></div>
            <div><dt className="text-white/65">Bathrooms</dt><dd className="mt-1 text-white/90">{active.baths}</dd></div>
            <div><dt className="text-white/65">Orientation</dt><dd className="mt-1 text-white/90">{active.facing}</dd></div>
            <div><dt className="text-white/65">Status</dt><dd className="mt-1 text-white/90">Concept sample</dd></div>
          </dl>
          <ul className="mt-6 space-y-3">
            {active.features.map((feature) => <li key={feature} className="flex items-center gap-3 text-xs text-white/80"><Check size={14} className="text-champagne" /> {feature}</li>)}
          </ul>
          <a href="#floor-plan-enquiry" className="mt-8 inline-flex items-center gap-2 border-b border-champagne/60 pb-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-champagne">Enquire about this plan <ArrowRight size={14} /></a>
        </div>
      </div>
    </div>
  );
}

function PlanSvg({ bedrooms }: { bedrooms: number }) {
  return (
    <svg viewBox="0 0 900 580" className="h-full min-h-[380px] w-full" role="img" aria-label={`Schematic ${bedrooms} bedroom apartment floor plan`}>
      <g fill="none" stroke="#6f735f" strokeWidth="3">
        <rect x="90" y="65" width="720" height="450" />
        <path d="M90 355H810M90 190H810" />
        <path d={bedrooms === 2 ? "M450 65V355" : bedrooms === 3 ? "M420 65V355M600 65V355" : "M390 65V355M570 65V355M705 65V190"} />
        <path d="M90 355V515M810 355V515" />
      </g>
      <g fill="#f8f6f0" stroke="#a5a798" strokeWidth="1.5">
        <rect x="90" y="355" width="720" height="160" />
      </g>
      <g fill="#6f735f" fontSize="15" fontFamily="Arial, sans-serif" textAnchor="middle">
        <text x="265" y="130">LIVING</text><text x="265" y="153" fontSize="11" fill="#9a9c90">DINING</text>
        <text x="265" y="275">KITCHEN</text>
        <text x={bedrooms === 2 ? "630" : bedrooms === 3 ? "510" : "480"} y="130">BEDROOM 01</text>
        <text x={bedrooms === 2 ? "630" : bedrooms === 3 ? "705" : "637"} y="275">BEDROOM 02</text>
        {bedrooms >= 3 && <text x={bedrooms === 3 ? "705" : "637"} y="130">BEDROOM 03</text>}
        {bedrooms === 4 && <text x="757" y="130">STUDY</text>}
        <text x="270" y="410">BEDROOM / MASTER</text><text x="270" y="435" fontSize="11" fill="#9a9c90">ENSUITE + WALK-IN</text>
        <text x="520" y="410">BEDROOM</text><text x="520" y="435" fontSize="11" fill="#9a9c90">BATH + DRESSING</text>
        <text x="700" y="410">BALCONY</text>
      </g>
      <g stroke="#b9b6aa" strokeWidth="1" strokeDasharray="5 5"><path d="M110 85H790" /><path d="M110 505H790" /></g>
    </svg>
  );
}
