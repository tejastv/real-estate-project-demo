import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Bath, BedDouble, Maximize2 } from "lucide-react";
import { configurations } from "@/data/site";

export default function PropertyConfigCards() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {configurations.map((property, index) => (
        <article key={property.id} className="group border border-line bg-paper transition-colors duration-300 hover:border-olive/60">
          <Link href={`/floor-plans#${property.id}`} className="block">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image src={property.image} alt={`${property.type} interior concept at ${property.title}`} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]" />
              <span className="absolute left-5 top-5 bg-paper/95 px-3 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-charcoal">{property.type}</span>
            </div>
            <div className="p-6 md:p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-olive">Residence {String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mt-2 text-3xl">{property.title}</h3>
                </div>
                <ArrowUpRight size={20} strokeWidth={1.3} className="mt-1 shrink-0 text-olive transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <p className="mt-4 text-sm leading-6 text-olive">{property.description}</p>
              <div className="mt-6 grid grid-cols-2 gap-3 border-t border-line pt-5 text-xs text-olive">
                <p className="flex items-center gap-2"><Maximize2 size={15} strokeWidth={1.4} /> {property.area}</p>
                <p className="flex items-center gap-2"><BedDouble size={15} strokeWidth={1.4} /> {property.bedrooms}</p>
                <p className="flex items-center gap-2"><Bath size={15} strokeWidth={1.4} /> {property.baths}</p>
              </div>
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
}
