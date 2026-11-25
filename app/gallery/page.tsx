import type { Metadata } from "next";
import CallToAction from "@/components/CallToAction";
import Hero from "@/components/Hero";
import ImageGallery from "@/components/ImageGallery";
import SectionHeading from "@/components/SectionHeading";
import { images } from "@/data/site";

export const metadata: Metadata = {
  title: "Gallery",
  description: "View the architectural and interior image gallery for the fictional Aarambh Heights premium residential concept.",
};

export default function GalleryPage() {
  return (
    <main>
      <Hero compact eyebrow="Gallery" title="A study in light, material and proportion." description="A curated visual exploration of the residential language that shapes Aarambh Heights." image={images.galleryThree} />

      <section className="section-pad bg-paper">
        <div className="container-page">
          <SectionHeading eyebrow="Project imagery" title="Explore the visual story." description="Select any image to open a larger preview. Use the arrow controls to move through the collection." />
          <div className="mt-12"><ImageGallery /></div>
          <p className="demo-note mt-10 max-w-3xl">All project images are illustrative editorial photography sourced from Unsplash. They do not depict the actual fictional development and should not be used as verified project representations.</p>
        </div>
      </section>

      <CallToAction />
    </main>
  );
}
