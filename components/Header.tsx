"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navigation } from "@/data/site";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);



  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isActive = (href: string) => href === "/" ? pathname === href : pathname.startsWith(href);

  return (
    <>
      <header className={`site-header ${scrolled || menuOpen ? "site-header--solid" : ""}`}>
        <div className="container-wide site-header__inner">
          <Link href="/" className="site-header__logo relative z-10 flex items-center gap-3 text-white" aria-label="Aarambh Heights home">
            <span className="grid h-9 w-9 place-items-center border border-champagne/70 font-display text-lg leading-none text-champagne">A</span>
            <span className="text-[0.72rem] font-medium tracking-[0.22em]">AARAMBH HEIGHTS</span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`site-header__nav-link relative py-2 text-[0.67rem] font-medium uppercase tracking-[0.13em] transition-colors ${isActive(item.href) ? "text-champagne" : "text-white/85 hover:text-white"}`}
              >
                {item.label}
                {isActive(item.href) && <span className="absolute inset-x-0 -bottom-1 h-px bg-champagne" />}
              </Link>
            ))}
          </nav>

          <Link href="/contact" className="site-header__cta hidden items-center gap-2 border-b border-champagne/70 pb-1 text-[0.67rem] font-semibold uppercase tracking-[0.14em] text-champagne transition-colors hover:text-white lg:flex">
            Enquire <ArrowUpRight size={14} strokeWidth={1.5} />
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="site-header__menu-button relative z-10 grid h-11 w-11 place-items-center text-white"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          >
            {menuOpen ? <X size={23} strokeWidth={1.5} /> : <Menu size={23} strokeWidth={1.5} />}
          </button>
        </div>
      </header>

      <div id="mobile-navigation" className={`fixed inset-0 z-40 overflow-y-auto bg-charcoal transition-[opacity,visibility] duration-300 lg:hidden ${menuOpen ? "visible opacity-100" : "invisible opacity-0"}`} aria-hidden={!menuOpen}>
        <div className="container-page flex min-h-full flex-col justify-center py-28">
          <p className="eyebrow mb-8 text-champagne">Discover the residence</p>
          <nav className="flex flex-col" aria-label="Mobile navigation">
            {navigation.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center justify-between border-b border-white/10 py-3.5 font-display text-[1.75rem] leading-tight transition-all duration-300 sm:text-3xl ${isActive(item.href) ? "text-champagne" : "text-white"}`}
                style={{ transitionDelay: menuOpen ? `${index * 35}ms` : "0ms" }}
              >
                {item.label}
                <span className="font-sans text-[0.65rem] tracking-widest text-white/65">0{index + 1}</span>
              </Link>
            ))}
          </nav>
          <p className="mt-8 max-w-sm text-xs leading-relaxed text-white/70">Concept address: Sector 7, Gandhinagar, Gujarat 382027. Illustrative portfolio details.</p>
        </div>
      </div>
    </>
  );
}
