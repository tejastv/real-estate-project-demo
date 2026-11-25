import type { Metadata } from "next";
import Image from "next/image";
import { Building2, Car, TrainFront, Trees } from "lucide-react";
import CallToAction from "@/components/CallToAction";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import { images } from "@/data/site";

export const metadata: Metadata = {
  title: "Location & Connectivity",
  description: "Explore the illustrative Gandhinagar location context and connectivity highlights for the Aarambh Heights portfolio concept.",
};

const connections = [
  { icon: Building2, name: "Business & civic district", detail: "Key offices, institutions and public services", time: "Indicative 10–20 min" },
  { icon: TrainFront, name: "Transit network", detail: "Access to the wider regional rail corridor", time: "Indicative 15–25 min" },
  { icon: Car, name: "Road connectivity", detail: "Convenient access to major city arterials", time: "Illustrative routes" },
  { icon: Trees, name: "Parks & recreation", detail: "Landscaped public spaces and leisure destinations", time: "Indicative 5–15 min" },
];

export default function LocationPage() {
  return (
    <main>
      <Hero compact eyebrow="Location" title="Gandhinagar, thoughtfully connected." description="A planned city of open spaces, civic clarity and enduring connectivity—presented here as an illustrative location study." image={images.architecture} />

      <section className="section-pad bg-paper">
        <div className="container-page grid gap-14 lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:gap-20">
          <div>
            <SectionHeading eyebrow="City context" title="A modern city with a human scale." description="Gandhinagar is known for its integrated planning, generous green cover and distinct civic districts. The location concept places daily convenience close to home while preserving a sense of calm." />
            <p className="mt-6 text-sm leading-7 text-olive">The location addresses and travel times on this page are illustrative portfolio content only. They are not surveyed, verified or guaranteed travel-time claims.</p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden bg-[#d8d8cc] p-5">
            <svg viewBox="0 0 800 600" className="h-full w-full" role="img" aria-label="Illustrative map of Gandhinagar showing the conceptual project location and surrounding districts">
              <rect width="800" height="600" fill="#e4e1d6" />
              <path d="M-40 115C150 190 210 60 420 100S680 210 850 95" fill="none" stroke="#c2c5b4" strokeWidth="55" />
              <path d="M90 620C170 390 320 330 440 220S680 100 850 90" fill="none" stroke="#f8f6f0" strokeWidth="20" />
              <path d="M0 400C130 360 260 390 370 450S620 530 820 420" fill="none" stroke="#f8f6f0" strokeWidth="13" />
              <path d="M250 0C280 160 370 210 410 330S430 530 500 620" fill="none" stroke="#f8f6f0" strokeWidth="14" />
              <path d="M40 60L320 280L680 500M180 0L460 260L760 180" fill="none" stroke="#b7b8a9" strokeWidth="3" />
              <g fill="#a3a793" fontFamily="Arial, sans-serif" fontSize="14" letterSpacing="2">
                <text x="120" y="170">SECTOR 6</text><text x="460" y="150">SECTOR 7</text><text x="580" y="330">SECTOR 8</text><text x="150" y="440">SECTOR 9</text><text x="610" y="545">SECTOR 10</text>
              </g>
              <circle cx="452" cy="235" r="55" fill="#69705a" opacity=".15" />
              <circle cx="452" cy="235" r="13" fill="#69705a" stroke="#f8f6f0" strokeWidth="5" />
              <text x="452" y="278" fill="#4e5546" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" textAnchor="middle">AARAMBH HEIGHTS</text>
              <text x="452" y="297" fill="#7b7d70" fontFamily="Arial, sans-serif" fontSize="11" textAnchor="middle">CONCEPT LOCATION</text>
            </svg>
            <div className="absolute bottom-4 right-4 bg-paper/90 px-3 py-2 text-[0.58rem] font-semibold uppercase tracking-[0.12em] text-olive">Illustrative map · Not to scale</div>
          </div>
        </div>
      </section>

      <section className="section-pad section-soft">
        <div className="container-page">
          <SectionHeading eyebrow="Connectivity" title="Daily life, within easy reach." description="A sample selection of the connections that shape the location story." />
          <div className="mt-12 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {connections.map(({ icon: Icon, name, detail, time }) => (
              <article key={name} className="bg-paper p-7 md:p-8">
                <Icon size={23} strokeWidth={1.35} className="text-olive" />
                <h3 className="mt-7 text-2xl">{name}</h3>
                <p className="mt-3 text-sm leading-6 text-olive">{detail}</p>
                <p className="mt-6 border-t border-line pt-4 text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-olive">{time}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-paper">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div className="relative aspect-[4/3] overflow-hidden"><Image src={images.galleryThree} alt="Green landscape around modern urban residential architecture" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" /></div>
          <div>
            <SectionHeading eyebrow="Neighbourhood" title="Everyday essentials, close at hand." description="The imagined neighbourhood offers a considered mix of schools, healthcare, retail, dining and open spaces. Everything required for daily life is close, while larger destinations remain accessible." />
            <div className="mt-8 grid grid-cols-2 gap-px bg-line">
              {["Schools & learning", "Healthcare", "Daily retail", "Parks & gardens", "Dining & cafés", "Sports & leisure"].map((item) => <p key={item} className="bg-paper py-5 pr-4 text-sm text-olive">{item}</p>)}
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </main>
  );
}
