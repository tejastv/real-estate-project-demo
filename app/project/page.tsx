import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CallToAction from "@/components/CallToAction";
import Hero from "@/components/Hero";
import ProjectHighlights from "@/components/ProjectHighlights";
import SectionHeading from "@/components/SectionHeading";
import { images } from "@/data/site";

export const metadata: Metadata = {
  title: "The Project",
  description: "Explore the architectural concept, design philosophy and residential experience of the fictional Aarambh Heights project in Gandhinagar.",
};

export default function ProjectPage() {
  return (
    <main>
      <Hero compact eyebrow="The project" title="An architectural response to modern Gandhinagar." description="A low-density residential idea shaped around daylight, landscape and the quiet rituals of home." image={images.exterior} />

      <ProjectHighlights />

      <section className="section-pad bg-paper">
        <div className="container-page grid gap-14 lg:grid-cols-2 lg:items-start lg:gap-24">
          <div className="lg:sticky lg:top-32">
            <SectionHeading eyebrow="Design philosophy" title="Rooted in place. Refined by light." description="The project concept draws from Gandhinagar’s disciplined urban planning and generous green spaces, translating them into an intimate residential architecture." />
            <div className="mt-9 space-y-5 border-t border-line pt-7">
              <p className="text-sm leading-7 text-olive">The architecture is defined by deep balconies, shaded openings and carefully framed views. Each elevation balances privacy with openness, while a coherent palette ties the building to its landscape.</p>
              <p className="text-sm leading-7 text-olive">Inside, spatial sequences are intuitive and adaptable. Living spaces are designed for both intimate evenings and generous family life, with natural materials lending warmth and calm.</p>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="relative aspect-[3/4] overflow-hidden sm:mt-20">
              <Image src={images.architecture} alt="Layered modern residential facade with landscaped planting" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image src={images.lobby} alt="Natural stone reception lounge with warm ambient lighting" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden sm:col-span-2 sm:aspect-[16/10]">
              <Image src={images.galleryOne} alt="Close view of tactile stone, timber and metal material details" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad section-soft">
        <div className="container-page">
          <SectionHeading eyebrow="Material palette" title="Natural tones. Lasting impression." description="A restrained palette of honed stone, warm oak, brushed metal and deep olive creates an atmosphere of understated permanence." />
          <div className="mt-12 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Ivory stone", color: "#d8d2c5" },
              { name: "Deep olive", color: "#59604e" },
              { name: "Warm oak", color: "#98775a" },
              { name: "Burnished brass", color: "#b39a69" },
            ].map((material, index) => (
              <div key={material.name} className="bg-paper p-6 md:p-8">
                <div className="h-32 border border-black/5" style={{ backgroundColor: material.color }} />
                <p className="mt-5 text-[0.6rem] tracking-[0.15em] text-olive">0{index + 1}</p>
                <h3 className="mt-2 text-2xl">{material.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-paper">
        <div className="container-page grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:gap-24">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image src={images.terrace} alt="Residential terrace framed by trees and warm evening light" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
          </div>
          <div>
            <SectionHeading eyebrow="The experience" title="A sense of belonging, from the first step." description="Arrival is deliberately unhurried. Layered landscape, a generous forecourt and a quiet threshold create a gradual transition from the city to a more personal place." />
            <div className="mt-9 grid gap-7 sm:grid-cols-2">
              {[
                ["01", "A considered arrival", "A landscaped forecourt creates privacy and a sense of welcome."],
                ["02", "Shared garden rooms", "Courtyards and pocket gardens bring nature into daily circulation."],
                ["03", "Well-connected homes", "Generous living rooms and private outdoor spaces support different rhythms of life."],
                ["04", "Places to gather", "Lounges, terraces and club rooms extend the home beyond its walls."],
              ].map(([number, title, text]) => (
                <div key={number} className="border-t border-line pt-5"><p className="text-[0.62rem] tracking-[0.14em] text-olive">{number}</p><h3 className="mt-3 text-2xl">{title}</h3><p className="mt-3 text-sm leading-6 text-olive">{text}</p></div>
              ))}
            </div>
            <Link href="/amenities" className="text-link mt-9">Explore the amenities <ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>

      <CallToAction />
    </main>
  );
}
