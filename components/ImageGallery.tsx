"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, Maximize2, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { galleryImages } from "@/data/site";

type ImageGalleryProps = {
  limit?: number;
  preview?: boolean;
};

export default function ImageGallery({ limit, preview = false }: ImageGalleryProps) {
  const images = limit ? galleryImages.slice(0, limit) : galleryImages;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const previous = useCallback(() => setActiveIndex((current) => current === null ? 0 : (current - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setActiveIndex((current) => current === null ? 0 : (current + 1) % images.length), [images.length]);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") previous();
      if (event.key === "ArrowRight") next();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, close, next, previous]);

  return (
    <>
      <div className={preview ? "grid gap-5 md:grid-cols-12" : "masonry"}>
        {images.map((image, index) => (
          <button
            type="button"
            key={image.src}
            onClick={() => setActiveIndex(index)}
            className={`group relative block w-full overflow-hidden text-left ${preview ? (index === 0 ? "aspect-[16/10] md:col-span-7" : index === 1 ? "aspect-[4/3] md:col-span-5" : "hidden md:col-span-5 aspect-[16/10]") : "mb-4"}`}
            aria-label={`Open image: ${image.title}`}
          >
            <Image
              src={image.src}
              alt={`${image.title} — illustrative architectural photograph`}
              fill
              sizes={preview ? "(max-width: 768px) 100vw, 60vw" : "(max-width: 768px) 100vw, 33vw"}
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-95" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-white">
              <div>
                <p className="text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-champagne">{image.category}</p>
                <p className="mt-1 font-display text-xl">{image.title}</p>
              </div>
              <Maximize2 size={17} strokeWidth={1.4} className="mb-1" />
            </div>
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-charcoal/97 p-4 md:p-8" role="dialog" aria-modal="true" aria-label="Image preview">
          <button type="button" onClick={close} className="absolute right-5 top-5 grid h-12 w-12 place-items-center border border-white/20 text-white transition-colors hover:border-champagne hover:text-champagne" aria-label="Close image preview"><X size={21} /></button>
          <button type="button" onClick={previous} className="absolute left-4 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center border border-white/20 text-white transition-colors hover:border-champagne hover:text-champagne md:left-8" aria-label="Previous image"><ArrowLeft size={20} /></button>
          <button type="button" onClick={next} className="absolute right-4 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center border border-white/20 text-white transition-colors hover:border-champagne hover:text-champagne md:right-8" aria-label="Next image"><ArrowRight size={20} /></button>
          <figure className="relative h-[82vh] w-full max-w-6xl">
            <Image src={images[activeIndex].src} alt={`${images[activeIndex].title} — illustrative architectural photograph`} fill sizes="100vw" className="object-contain" priority />
            <figcaption className="absolute -bottom-7 left-0 text-xs tracking-wide text-white/60 md:left-1/2 md:-translate-x-1/2 md:text-center">
              {images[activeIndex].title} <span className="mx-2 text-white/25">/</span> {activeIndex + 1} of {images.length}
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
