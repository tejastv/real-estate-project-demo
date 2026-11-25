import type { Metadata } from "next";
import CallToAction from "@/components/CallToAction";
import FAQAccordion from "@/components/FAQAccordion";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import { images } from "@/data/site";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Answers to common questions about the illustrative Aarambh Heights residential concept, configurations, amenities, location and enquiry demo.",
};

export default function FAQPage() {
  return (
    <main>
      <Hero compact eyebrow="Frequently asked questions" title="Everything you need to know." description="A clear introduction to the concept, its illustrative features and the important details behind this portfolio presentation." image={images.dining} />

      <section className="section-pad bg-paper">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[.65fr_1.35fr] lg:gap-20">
            <div>
              <SectionHeading eyebrow="Good to know" title="Questions, answered." description="For this portfolio concept, we have prioritised clarity over unsupported claims." />
              <div className="demo-note mt-8">This project is fictional. It is not a live sales offering, and no regulatory, legal or commercial claims should be inferred.</div>
            </div>
            <FAQAccordion />
          </div>
        </div>
      </section>

      <CallToAction />
    </main>
  );
}
