import type { Metadata } from "next";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import CallToAction from "@/components/CallToAction";
import EnquiryForm from "@/components/EnquiryForm";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import { images } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact & Enquiry",
  description: "Contact the studio or submit an illustrative enquiry about the fictional Aarambh Heights residential concept in Gandhinagar.",
};

export default function ContactPage() {
  return (
    <main>
      <Hero compact eyebrow="Contact" title="Let’s begin a conversation." description="Tell us what you are looking for in a home, or explore the concept and its available configurations." image={images.lobby} />

      <section className="section-pad bg-paper">
        <div className="container-page grid gap-14 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
          <div>
            <SectionHeading eyebrow="Your enquiry" title="A considered beginning." description="Share a few details and our studio would normally respond with relevant project information. This demonstration does not transmit data." />
            <div className="mt-10 space-y-6 border-t border-line pt-8">
              <ContactDetail icon={MapPin} label="Concept location" value="Sector 7, Gandhinagar, Gujarat 382027" />
              <ContactDetail icon={Phone} label="Placeholder phone" value="+91 90000 00000" />
              <ContactDetail icon={Mail} label="Placeholder email" value="hello@example.com" />
              <ContactDetail icon={Clock3} label="Studio hours" value="Mon–Sat, 10:00–18:00 IST" />
            </div>
            <p className="demo-note mt-8">Contact details are placeholders for this fictional portfolio. Replace them only with verified business information before publishing.</p>
          </div>
          <EnquiryForm />
        </div>
      </section>

      <CallToAction />
    </main>
  );
}

function ContactDetail({ icon: Icon, label, value }: { icon: typeof MapPin; label: string; value: string }) {
  return (
    <div className="flex gap-4"><Icon size={18} strokeWidth={1.4} className="mt-1 shrink-0 text-olive" /><div><p className="text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-olive">{label}</p><p className="mt-1 text-sm text-charcoal">{value}</p></div></div>
  );
}
