import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { images } from "@/data/site";

type HeroProps = {
  title?: string;
  eyebrow?: string;
  description?: string;
  image?: string;
  compact?: boolean;
};

export default function Hero({
  title = "Space to live, thoughtfully elevated.",
  eyebrow = "A new expression of elevated living",
  description = "A contemporary residential concept in Gandhinagar, shaped by warm materials, generous light and the quiet luxury of considered space.",
  image = images.hero,
  compact = false,
}: HeroProps) {
  return (
    <section className={`relative flex items-end overflow-hidden bg-charcoal ${compact ? "min-h-[76vh]" : "min-h-screen"}`}>
      <Image
        src={image}
        alt="Contemporary luxury residence with warm stone architecture and landscaped approach"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(22,23,20,.86)_0%,rgba(22,23,20,.46)_58%,rgba(22,23,20,.16)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(22,23,20,.7)_0%,transparent_55%)]" />
      <div className="container-wide relative z-10 pb-14 pt-36 md:pb-20">
        <p className="eyebrow reveal text-champagne">{eyebrow}</p>
        <h1 className="reveal reveal-delay mt-7 max-w-[1050px] text-white">{title}</h1>
        <div className="reveal reveal-delay-2 mt-8 flex flex-col gap-8 border-t border-white/25 pt-6 md:flex-row md:items-end md:justify-between">
          <p className="max-w-xl text-sm leading-7 text-white/85 md:text-base">{description}</p>
          {!compact && (
            <a href="#introduction" className="flex items-center gap-3 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-white/70 transition-colors hover:text-white">
              <span className="grid h-10 w-10 place-items-center border border-white/30"><ArrowDown size={15} /></span>
              Explore the project
            </a>
          )}
        </div>
      </div>
      <div className="absolute right-8 top-1/2 z-10 hidden -translate-y-1/2 [writing-mode:vertical-rl] lg:block">
        <p className="text-[0.6rem] uppercase tracking-[0.22em] text-white/70">Gandhinagar · Gujarat · India</p>
      </div>
    </section>
  );
}
