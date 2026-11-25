import type { Metadata } from "next";
import CallToAction from "@/components/CallToAction";
import FloorPlanSelector from "@/components/FloorPlanSelector";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import { images } from "@/data/site";

export const metadata: Metadata = {
  title: "Floor Plans & Configurations",
  description: "Explore illustrative 2 BHK, 3 BHK and 4 BHK floor plan concepts for the fictional Aarambh Heights residential project.",
};

export default function FloorPlansPage() {
  return (
    <main>
      <Hero compact eyebrow="Floor plans" title="Homes with clarity and generosity." description="Explore three illustrative residence types, each shaped around natural light, intuitive circulation and the needs of modern family life." image={images.galleryOne} />

      <section className="section-pad bg-paper">
        <div className="container-page">
          <SectionHeading eyebrow="Configurations" title="Choose your place to belong." description="Select a configuration to view its key attributes and a sample spatial schematic." />
          <div className="mt-12"><FloorPlanSelector /></div>
          <div className="demo-note mt-8 max-w-3xl"><strong>Portfolio disclaimer:</strong> these floor plans are schematic design ideas, not approved construction drawings. Areas, orientations and room layouts are illustrative and subject to change.</div>
        </div>
      </section>

      <section id="floor-plan-enquiry" className="section-pad section-soft">
        <div className="container-page grid gap-10 md:grid-cols-3">
          {[
            ["01", "Generous arrival", "A calm sequence from the forecourt into the heart of the home."],
            ["02", "Intuitive zoning", "Public and private spaces are clearly separated without losing openness."],
            ["03", "Natural light", "Openings and balcony depths bring daylight deep into each plan."],
          ].map(([number, title, copy]) => (
            <div key={number} className="border-t border-line pt-6"><p className="text-[0.62rem] tracking-[0.16em] text-olive">{number}</p><h3 className="mt-3 text-2xl">{title}</h3><p className="mt-3 text-sm leading-7 text-olive">{copy}</p></div>
          ))}
        </div>
      </section>

      <CallToAction />
    </main>
  );
}
