import Link from "next/link";
import { ArrowUpRight, Camera, Mail, MapPin, Phone, Share2 } from "lucide-react";
import { navigation } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/65">
      <div className="container-wide border-b border-white/10 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_.7fr_.9fr] lg:gap-20">
          <div>
            <Link href="/" className="inline-flex items-center gap-3 text-white">
              <span className="grid h-11 w-11 place-items-center border border-champagne/70 font-display text-xl text-champagne">A</span>
              <span className="text-xs font-medium tracking-[0.22em]">AARAMBH HEIGHTS</span>
            </Link>
            <p className="mt-7 max-w-md font-display text-2xl leading-snug text-white/90">
              Elevated living, thoughtfully composed for modern families in Gandhinagar.
            </p>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/70">
              A fictional portfolio concept by Atelier North. All imagery and content are illustrative and do not represent a verified development.
            </p>
          </div>

          <div>
            <p className="mb-6 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-champagne">Explore</p>
            <ul className="space-y-3.5 text-sm">
              {navigation.map((item) => (
                <li key={item.href}><Link href={item.href} className="transition-colors hover:text-white">{item.label}</Link></li>
              ))}
              <li><Link href="/faq" className="transition-colors hover:text-white">FAQs</Link></li>
            </ul>
          </div>

          <div>
            <p className="mb-6 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-champagne">Concept contact</p>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3"><MapPin size={17} className="mt-1 shrink-0 text-champagne" /> <span>Well-known Plaza, Sindhu Bhavan Road,<br />Ahmedabad, Gujarat 380059</span></li>
              <li className="flex gap-3"><Phone size={17} className="mt-1 shrink-0 text-champagne" /> <a href="tel:+919000000000" className="hover:text-white">+91 90000 00000 <span className="text-white/70">(placeholder)</span></a></li>
              <li className="flex gap-3"><Mail size={17} className="mt-1 shrink-0 text-champagne" /> <a href="mailto:hello@example.com" className="hover:text-white">hello@example.com</a></li>
            </ul>
            <div className="mt-8 flex gap-3">
              <a href="#" aria-label="Social profile (placeholder link)" className="grid h-10 w-10 place-items-center border border-white/15 transition-colors hover:border-champagne hover:text-champagne"><Camera size={16} /></a>
              <a href="#" aria-label="Professional network (placeholder link)" className="grid h-10 w-10 place-items-center border border-white/15 transition-colors hover:border-champagne hover:text-champagne"><Share2 size={16} /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="container-wide flex flex-col gap-5 py-7 text-[0.66rem] uppercase tracking-[0.1em] text-white/70 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Aarambh Heights — Portfolio concept</p>
        <div className="flex flex-wrap gap-5">
          <Link href="/faq" className="hover:text-white">FAQ</Link>
          <Link href="/contact" className="hover:text-white">Enquiry</Link>
          <a href="#" className="inline-flex items-center gap-1 hover:text-white">Privacy <ArrowUpRight size={11} /></a>
        </div>
      </div>
    </footer>
  );
}
