import { highlights } from "@/data/site";

export default function ProjectHighlights() {
  return (
    <section className="border-b border-line bg-paper">
      <div className="container-wide grid grid-cols-2 divide-x divide-y divide-line border-x border-line lg:grid-cols-4 lg:divide-y-0">
        {highlights.map((item) => (
          <div key={item.label} className="px-5 py-8 md:px-9 md:py-10">
            <p className="font-display text-2xl text-charcoal md:text-3xl">{item.value}</p>
            <p className="mt-2 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-olive">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
