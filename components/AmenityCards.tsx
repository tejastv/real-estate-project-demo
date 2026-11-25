import Image from "next/image";
import { Activity, BriefcaseBusiness, Landmark, Leaf, Sofa, Trees, Waves, Wine } from "lucide-react";
import { amenities } from "@/data/site";

const icons = {
  activity: Activity,
  briefcase: BriefcaseBusiness,
  landmark: Landmark,
  leaf: Leaf,
  sofa: Sofa,
  trees: Trees,
  waves: Waves,
  wine: Wine,
};

type AmenityCardsProps = {
  limit?: number;
  detailed?: boolean;
};

export default function AmenityCards({ limit, detailed = false }: AmenityCardsProps) {
  const items = limit ? amenities.slice(0, limit) : amenities;

  return (
    <div className={`grid gap-px bg-line ${detailed ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-4"}`}>
      {items.map((amenity) => {
        const Icon = icons[amenity.icon as keyof typeof icons];
        return (
          <article key={amenity.title} className="group relative overflow-hidden bg-paper">
            <div className={`relative overflow-hidden ${detailed ? "aspect-[16/10]" : "aspect-[4/5]"}`}>
              <Image src={amenity.image} alt={`${amenity.title} conceptual architectural view`} fill sizes={detailed ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 25vw"} className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/5 to-transparent" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-7">
              <Icon size={21} strokeWidth={1.35} className="mb-4 text-champagne" />
              <h3 className="text-white">{amenity.title}</h3>
              <p className="mt-3 max-w-sm text-sm leading-6 text-white/80">{amenity.description}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
