import type { Metadata } from "next";
import Image from "next/image";
import AmenityCards from "@/components/AmenityCards";
import CallToAction from "@/components/CallToAction";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import { images } from "@/data/site";

export const metadata: Metadata = {
  title: "Amenities",
  description: "Explore the wellness, leisure, landscape and social amenities in the illustrative Aarambh Heights residential concept.",
};

export default function AmenitiesPage() {
  return (
    <main>
      <Hero compact eyebrow="Amenities" title="Wellbeing, connection and a little more." description="Every shared space is conceived as a natural extension of the home—designed for restorative moments and meaningful connection." image={images.galleryFour} />

      <section className="section-pad bg-paper">
        <div className="container-page">
          <SectionHeading eyebrow="The amenity collection" title="Made for the rhythms of everyday life." description="A balanced mix of active, social and restorative spaces brings variety to daily life at Aarambh Heights." />
          <div className="mt-12"><AmenityCards detailed /></div>
        </div>
      </section>

      <section className="section-pad section-soft">
        <div className="container-page grid gap-12 lg:grid-cols-[1.15fr_.85fr] lg:items-center lg:gap-20">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image src={images.galleryFive} alt="Warmly lit residents lounge with comfortable seating" fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" />
          </div>
          <div>
            <SectionHeading eyebrow="Wellness" title="Spaces that restore the pace of life." description="Natural light, tactile finishes and quiet landscape views create a restorative backdrop for movement, rest and reflection." />
            <ul className="mt-8 space-y-4 border-t border-line pt-6 text-sm leading-6 text-olive">
              {["Poolside leisure and shaded deck", "Fitness and yoga studios", "Quiet work and study lounges", "Landscaped walking and garden routes"].map((item) => <li key={item} className="flex items-center gap-3 before:h-1 before:w-1 before:bg-olive">{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-pad bg-paper">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-24">
          <div className="order-2 lg:order-1">
            <SectionHeading eyebrow="Social life" title="Made for meaningful moments." description="Intimate and expressive, the shared rooms provide a flexible backdrop for conversation, celebration and unhurried time together." />
            <p className="mt-6 max-w-xl text-sm leading-7 text-olive">The full amenity scope in this portfolio is illustrative. Final facilities should be confirmed against verified project documentation before publication.</p>
          </div>
          <div className="order-1 grid grid-cols-2 gap-4 lg:order-2">
            <div className="relative aspect-[3/4] overflow-hidden"><Image src={images.galleryTwo} alt="Textured wellness space with soft natural light" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" /></div>
            <div className="relative mt-12 aspect-[3/4] overflow-hidden"><Image src={images.lobby} alt="Elegant residents lounge with sculptural furniture" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" /></div>
          </div>
        </div>
      </section>

      <CallToAction />
    </main>
  );
}
