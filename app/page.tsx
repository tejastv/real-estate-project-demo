import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import AmenityCards from "@/components/AmenityCards";
import CallToAction from "@/components/CallToAction";
import Hero from "@/components/Hero";
import ImageGallery from "@/components/ImageGallery";
import ProjectHighlights from "@/components/ProjectHighlights";
import PropertyConfigCards from "@/components/PropertyConfigCards";
import SectionHeading from "@/components/SectionHeading";
import { images } from "@/data/site";

export default function HomePage() {
  return (
    <main>
      <Hero />

      <ProjectHighlights />

      <section id="introduction" className="section-pad bg-paper">
        <div className="container-page grid gap-14 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-24">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image src={images.lobby} alt="Warmly lit contemporary residential lounge with natural stone finishes" fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
            </div>
            <div className="absolute -bottom-7 -right-3 hidden w-48 border-[10px] border-paper bg-olive p-6 text-white md:block">
              <p className="font-display text-3xl">Thoughtful</p>
              <p className="mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.15em] text-white/65">by design</p>
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="The residential vision" title="A quiet statement of modern living." description="Aarambh Heights is conceived around the belief that a home should feel calm, generous and deeply personal. Every spatial decision—from the rhythm of the façade to the warmth of interior materials—is designed to create an enduring sense of arrival." />
            <p className="mt-6 max-w-xl text-sm leading-7 text-olive">The resulting concept brings together thoughtful spatial planning, abundant daylight and a refined material palette inspired by Gandhinagar’s modern urban landscape. It is an architectural idea for life today—and the years ahead.</p>
            <div className="mt-8 flex flex-wrap gap-8 border-t border-line pt-7">
              <div><p className="font-display text-3xl">01</p><p className="mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-olive">Landscape-led arrival</p></div>
              <div><p className="font-display text-3xl">02</p><p className="mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-olive">Light-filled homes</p></div>
              <div><p className="font-display text-3xl">03</p><p className="mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-olive">Enduring materials</p></div>
            </div>
            <Link href="/project" className="text-link mt-9">Explore the project <ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>

      <section className="section-pad section-soft">
        <div className="container-page">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading eyebrow="Residences" title="Space, arranged around you." description="A considered range of residences, each with generous proportions and an intuitive connection to light, landscape and daily life." />
            <Link href="/floor-plans" className="text-link shrink-0">View floor plans <ArrowUpRight size={14} /></Link>
          </div>
          <div className="mt-12"><PropertyConfigCards /></div>
        </div>
      </section>

      <section className="section-pad bg-charcoal">
        <div className="container-page">
          <SectionHeading light eyebrow="Amenities" title="Spaces for living well." description="From restorative wellness spaces to lively social rooms, the amenity landscape is designed as a natural extension of home." />
          <div className="mt-12"><AmenityCards limit={4} /></div>
          <div className="mt-9 flex justify-end"><Link href="/amenities" className="text-link !border-champagne/50 !text-white hover:!text-champagne">Explore all amenities <ArrowRight size={14} /></Link></div>
        </div>
      </section>

      <section className="section-pad bg-paper">
        <div className="container-page">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading eyebrow="The visual language" title="Architecture in quiet detail." description="Warm stone, sculptural forms and considered landscapes create a contemporary residential identity." />
            <Link href="/gallery" className="text-link shrink-0">Open gallery <ArrowUpRight size={14} /></Link>
          </div>
          <div className="mt-12"><ImageGallery limit={3} preview /></div>
        </div>
      </section>

      <section className="section-pad section-soft">
        <div className="container-page grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:gap-20">
          <div className="relative aspect-[5/4] overflow-hidden">
            <Image src={images.architecture} alt="Modern residential architecture integrated with greenery" fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" />
            <div className="absolute bottom-5 left-5 bg-paper/95 px-5 py-4 backdrop-blur-sm">
              <p className="flex items-center gap-2 text-[0.64rem] font-semibold uppercase tracking-[0.14em] text-olive"><MapPin size={14} /> Gandhinagar, Gujarat</p>
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Location advantage" title="At the centre of a well-connected city." description="Gandhinagar’s planned urban fabric offers a distinctive balance: thoughtful public spaces, everyday convenience and a refreshing connection to nature." />
            <div className="mt-8 space-y-0 border-t border-line">
              {["Close to key institutional and commercial districts", "Well-connected road and public transport network", "Easy access to parks, hospitality and daily essentials", "A safe, walkable and family-focused city setting"].map((item, index) => (
                <div key={item} className="flex gap-5 border-b border-line py-5 text-sm text-olive"><span className="text-[0.6rem] tracking-widest text-olive">0{index + 1}</span>{item}</div>
              ))}
            </div>
            <p className="mt-5 text-xs leading-6 text-olive">Connectivity descriptions are illustrative and are not verified travel-time claims.</p>
            <Link href="/location" className="text-link mt-7">Explore the location <ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>

      <CallToAction />
    </main>
  );
}
