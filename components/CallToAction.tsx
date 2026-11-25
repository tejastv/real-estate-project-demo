import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { images } from "@/data/site";
import Image from "next/image";

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-charcoal">
      <Image src={images.terrace} alt="Sunlit terrace overlooking landscaped architecture" fill sizes="100vw" className="object-cover opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/90 to-charcoal/45" />
      <div className="container-page relative z-10 py-24 md:py-32">
        <p className="eyebrow text-champagne">Your place in Gandhinagar</p>
        <h2 className="mt-6 max-w-4xl text-white">Discover a more considered way of living.</h2>
        <p className="mt-6 max-w-xl text-sm leading-7 text-white/75">Speak with our studio about the project concept, residences and the design approach.</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link href="/contact" className="btn btn-light">Plan your visit <ArrowRight size={15} /></Link>
          <a href="tel:+919000000000" className="btn border-white/35 bg-transparent text-white hover:border-white hover:bg-white hover:text-charcoal"><Phone size={15} /> Call placeholder</a>
        </div>
        <p className="mt-5 text-[0.65rem] uppercase tracking-[0.12em] text-white/70">+91 90000 00000 · Illustrative contact number</p>
      </div>
    </section>
  );
}
