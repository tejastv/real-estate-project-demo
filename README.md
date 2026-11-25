# Aarambh Heights — Residential Project Website Demo

A premium, production-quality demo website for a **fictional residential real estate project** in Gandhinagar, Gujarat. Built to demonstrate how an individual project developer can present configurations, amenities, floor plans, location and enquiries in a single, fast, mobile-first experience.

> **Fictional demo project.** All imagery, floor plans, pricing-free area data, contact details and project information are illustrative sample content. No RERA registration, government approval, completion certificate, possession date or verified project claim is made.

## Stack

- Next.js 16 (App Router, Turbopack)
- TypeScript
- Tailwind CSS v4
- Lucide React
- Next.js Image (remote Unsplash patterns)

No additional dependencies beyond the base Next.js install.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Routes

| Route | Purpose |
|---|---|
| `/` | Editorial homepage — hero, highlights, introduction, configurations, amenities, gallery preview, location, enquiry CTA |
| `/project` | Project concept, design philosophy, material palette and resident experience |
| `/amenities` | Full amenity collection with wellness and social-life sections |
| `/floor-plans` | Selectable 2 / 3 / 4 BHK configurations with illustrative schematics |
| `/gallery` | Filterable-style masonry gallery with fullscreen lightbox |
| `/location` | Gandhinagar location study, connectivity overview and neighbourhood context |
| `/contact` | Validated enquiry form with demo success state |
| `/faq` | Functional accessible FAQ accordion |

## Structure

```text
app/
├── layout.tsx          # Metadata, header/footer, floating WhatsApp button
├── globals.css         # Design system: palette, typography, buttons, layout
├── page.tsx            # Homepage
├── project/ amenities/ floor-plans/ gallery/ location/ contact/ faq/
components/
├── Header.tsx          # Sticky nav, active states, mobile menu
├── Footer.tsx
├── Hero.tsx
├── SectionHeading.tsx
├── ProjectHighlights.tsx
├── AmenityCards.tsx
├── PropertyConfigCards.tsx
├── ImageGallery.tsx    # Lightbox with keyboard navigation
├── FloorPlanSelector.tsx
├── EnquiryForm.tsx     # Client-side validation + demo success state
├── FAQAccordion.tsx
├── CallToAction.tsx
└── WhatsAppButton.tsx
data/
└── site.ts             # All content: navigation, imagery, configurations, amenities, gallery, FAQs
public/
└── mark.svg            # Brand monogram
```

## Content model

Everything is driven from `data/site.ts`:

```ts
export const configurations: Configuration[] = [...]
export const amenities = [...]
export const galleryImages = [...]
export const faqs = [...]
```

Update the data file to change the project name, imagery, configurations, amenities or questions — no component changes required.

## Notes for production use

- Replace the Unsplash image URLs with real project photography.
- Replace placeholder phone, email and WhatsApp numbers in `components/Header.tsx`, `components/Footer.tsx`, `components/CallToAction.tsx` and `components/WhatsAppButton.tsx`.
- Connect `components/EnquiryForm.tsx` to a backend, CRM or form service — it currently validates in the browser only and shows a sample success state.
- Add verified RERA disclosure content if this is adapted into a live project site.
- Update `metadataBase` and the canonical URL in `app/layout.tsx`.
