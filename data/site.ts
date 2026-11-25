export const navigation = [
  { label: "Home", href: "/" },
  { label: "The Project", href: "/project" },
  { label: "Amenities", href: "/amenities" },
  { label: "Floor Plans", href: "/floor-plans" },
  { label: "Gallery", href: "/gallery" },
  { label: "Location", href: "/location" },
  { label: "Contact", href: "/contact" },
];

export const images = {
  hero: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=90",
  exterior: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1800&q=88",
  architecture: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=88",
  lobby: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=88",
  living: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1800&q=88",
  dining: "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=1800&q=88",
  kitchen: "https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?auto=format&fit=crop&w=1800&q=88",
  bedroom: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1800&q=88",
  bathroom: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1800&q=88",
  terrace: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1800&q=88",
  galleryOne: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=88",
  galleryTwo: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1800&q=88",
  galleryThree: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1800&q=88",
  galleryFour: "https://images.unsplash.com/photo-1600607688066-890987f18a86?auto=format&fit=crop&w=1800&q=88",
  galleryFive: "https://images.unsplash.com/photo-1600607688960-e095ff83135c?auto=format&fit=crop&w=1800&q=88",
  gallerySix: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1800&q=88",
};

export const highlights = [
  { value: "2, 3 & 4", label: "BHK residences" },
  { value: "Low-density", label: "residential concept" },
  { value: "Open-ended", label: "thoughtful living" },
  { value: "Gandhinagar", label: "Gujarat, India" },
];

export type Configuration = {
  id: string;
  type: string;
  title: string;
  area: string;
  bedrooms: string;
  baths: string;
  facing: string;
  description: string;
  image: string;
  features: string[];
};

export const configurations: Configuration[] = [
  {
    id: "2-bhk",
    type: "2 BHK",
    title: "The Garden Residence",
    area: "1,185–1,245 sq.ft.",
    bedrooms: "2 Bedrooms",
    baths: "2 Bathrooms",
    facing: "Open orientations",
    description: "A considered two-bedroom home balancing generous living spaces, natural light and private outdoor prospects.",
    image: images.living,
    features: ["Living + dining", "Private balcony", "Utility zone"],
  },
  {
    id: "3-bhk",
    type: "3 BHK",
    title: "The Courtyard Residence",
    area: "1,685–1,765 sq.ft.",
    bedrooms: "3 Bedrooms",
    baths: "3 Bathrooms",
    facing: "Open orientations",
    description: "A spacious family residence with distinct living zones, an elegant kitchen and a calm connection to the landscape.",
    image: images.dining,
    features: ["Enter + living", "Island kitchen", "Wide balconies"],
  },
  {
    id: "4-bhk",
    type: "4 BHK",
    title: "The Sky Residence",
    area: "2,385–2,525 sq.ft.",
    bedrooms: "4 Bedrooms",
    baths: "4 Bathrooms",
    facing: "Open orientations",
    description: "Generous entertaining spaces and a private master suite shaped for panoramic views and relaxed city living.",
    image: images.bedroom,
    features: ["Formal living", "Master suite", "Private terrace"],
  },
];

export const amenities = [
  {
    title: "Arrival Court",
    description: "A landscaped arrival sequence with a calm, naturally lit arrival experience.",
    icon: "landmark",
    image: images.architecture,
  },
  {
    title: "Residents’ Lounge",
    description: "An elevated social lounge for unhurried conversations and relaxed evenings.",
    icon: "sofa",
    image: images.lobby,
  },
  {
    title: "Fitness Studio",
    description: "A naturally ventilated movement space with an open, considered material palette.",
    icon: "activity",
    image: images.galleryTwo,
  },
  {
    title: "Yoga Garden",
    description: "A landscaped green court designed as a quiet counterpoint to the city.",
    icon: "leaf",
    image: images.terrace,
  },
  {
    title: "Children’s Play Court",
    description: "A secure, engaging play landscape for children within the residential grounds.",
    icon: "trees",
    image: images.galleryThree,
  },
  {
    title: "Poolside Deck",
    description: "A serene pool terrace with sheltered seating and thoughtfully framed landscape views.",
    icon: "waves",
    image: images.galleryFour,
  },
  {
    title: "Club Room",
    description: "A private setting for intimate gatherings, events and celebrations.",
    icon: "wine",
    image: images.kitchen,
  },
  {
    title: "Work & Study Lounge",
    description: "Quiet, flexible spaces designed for focused work and restorative breaks.",
    icon: "briefcase",
    image: images.galleryFive,
  },
];

export const galleryImages = [
  { src: images.hero, title: "Architectural arrival", category: "Exterior" },
  { src: images.living, title: "Contemporary living room", category: "Interiors" },
  { src: images.exterior, title: "Residence façade", category: "Exterior" },
  { src: images.kitchen, title: "Sculptural kitchen", category: "Interiors" },
  { src: images.galleryOne, title: "Material and light", category: "Details" },
  { src: images.bedroom, title: "Private bedroom suite", category: "Interiors" },
  { src: images.galleryTwo, title: "Wellness architecture", category: "Amenities" },
  { src: images.terrace, title: "Garden terrace", category: "Amenities" },
  { src: images.galleryThree, title: "Landscape connection", category: "Exterior" },
  { src: images.bathroom, title: "Spa-like bathroom", category: "Interiors" },
  { src: images.galleryFour, title: "Poolside leisure", category: "Amenities" },
  { src: images.galleryFive, title: "Shared lounge", category: "Amenities" },
];

export const faqs = [
  {
    question: "What configurations are included in the project concept?",
    answer: "The illustrative concept includes 2, 3 and 4 BHK residences ranging from approximately 1,185 to 2,525 sq.ft. These layouts are presented for design visualization; final areas may vary.",
  },
  {
    question: "Where is Aarambh Heights located?",
    answer: "The portfolio concept is situated in Gandhinagar, Gujarat, within the city's planned urban district. The location page presents indicative connectivity distances for demonstration purposes.",
  },
  {
    question: "Are the images and renderings of the actual project?",
    answer: "No. All photography, floor-plan concepts and project information in this portfolio are curated sample content. Architectural images are sourced from Unsplash and do not depict the actual development.",
  },
  {
    question: "What facilities are represented in the amenities?",
    answer: "The concept includes arrival landscaping, a residents' lounge, fitness and yoga spaces, a children’s play court, poolside leisure, club rooms and work lounges. Amenity scope is illustrative.",
  },
  {
    question: "Is the enquiry form connected to a sales team?",
    answer: "No. This is a portfolio demonstration. The form validates entries in the browser and displays a sample success state, but no information is sent to a backend or processed by a sales team.",
  },
  {
    question: "Are any RERA or project approval details available?",
    answer: "No registration, approval, possession or certification claims are made for this fictional concept. Production project information should only be published after verification by the developer and legal teams.",
  },
];
