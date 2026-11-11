export type Property = {
  slug: string;
  name: string;
  intent: "Buy" | "Rent";
  type: "Bungalow" | "Maisonette" | "Apartment" | "Own-compound house";
  location: string;
  setting: string;
  price: number;
  priceLabel: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  summary: string;
  description: string;
  amenities: string[];
  images: { src: string; alt: string }[];
};

export const properties: Property[] = [
  {
    slug: "the-alder-house",
    name: "The Alder House",
    intent: "Buy",
    type: "Maisonette",
    location: "Kenyatta Road",
    setting: "Kenyatta Road, Kiambu",
    price: 22500000,
    priceLabel: "KSh 22,500,000",
    bedrooms: 4,
    bathrooms: 3,
    area: 310,
    summary: "A modern retreat with light-filled rooms and a quiet garden outlook.",
    description: "An illustrative home concept shaped around easy indoor-outdoor living. Expansive glazing, warm finishes and generous gathering spaces set the tone for a slower pace of life.",
    amenities: ["Garden", "Open-plan living", "Covered terrace", "Home office", "Parking"],
    images: [
      { src: "/images/hero-house.jpg", alt: "Modern home with broad glazing at dusk" },
      { src: "/images/residence-two.jpg", alt: "Bright living room opening toward an outdoor terrace" },
      { src: "/images/residence-four.jpg", alt: "Open dining room with modern staircase" },
    ],
  },
  {
    slug: "the-courtyard-residence",
    name: "The Courtyard Residence",
    intent: "Buy",
    type: "Bungalow",
    location: "Mugutha",
    setting: "Mugutha, Ruiru",
    price: 11500000,
    priceLabel: "KSh 11,500,000",
    bedrooms: 3,
    bathrooms: 2,
    area: 245,
    summary: "Architectural lines, natural textures and room to make it your own.",
    description: "This demonstration concept pairs a crisp contemporary exterior with flexible spaces for everyday life. Its calm palette and open layout create a considered backdrop for living.",
    amenities: ["Private garden", "Flexible study", "Open kitchen", "Parking"],
    images: [
      { src: "/images/residence-one.jpg", alt: "Contemporary house with timber facade and garden" },
      { src: "/images/residence-five.jpg", alt: "Comfortable living room with open staircase" },
      { src: "/images/residence-two.jpg", alt: "Light-filled modern lounge and kitchen" },
    ],
  },
  {
    slug: "the-solstice-suite",
    name: "The Solstice Suite",
    intent: "Rent",
    type: "Apartment",
    location: "Ruiru",
    setting: "Ruiru, Kiambu",
    price: 45000,
    priceLabel: "KSh 45,000 / month",
    bedrooms: 2,
    bathrooms: 2,
    area: 128,
    summary: "An airy apartment concept for an effortless city rhythm.",
    description: "A demonstration apartment defined by daylight, useful storage and a generous shared living space. A refined, uncomplicated base for the way you live now.",
    amenities: ["Open-plan living", "Balcony", "Storage", "Parking"],
    images: [
      { src: "/images/residence-two.jpg", alt: "Sunlit contemporary living room" },
      { src: "/images/residence-four.jpg", alt: "Modern dining area with large windows" },
      { src: "/images/residence-five.jpg", alt: "Softly furnished living space" },
    ],
  },
  {
    slug: "the-cedar-pavilion",
    name: "The Cedar Pavilion",
    intent: "Buy",
    type: "Own-compound house",
    location: "Membley",
    setting: "Membley, Ruiru",
    price: 26500000,
    priceLabel: "KSh 26,500,000",
    bedrooms: 4,
    bathrooms: 3,
    area: 285,
    summary: "A warm timber exterior frames a bold, welcoming home concept.",
    description: "A sample residence imagined for people who value form and function in equal measure. Layered textures, generous glazing and an adaptable floor plan bring everyday comfort to an architectural silhouette.",
    amenities: ["Terrace", "Family room", "Home office", "Parking", "Garden"],
    images: [
      { src: "/images/residence-three.jpg", alt: "Timber-clad modern house with glass entrance" },
      { src: "/images/residence-four.jpg", alt: "Contemporary dining space and staircase" },
      { src: "/images/residence-two.jpg", alt: "Open living room and kitchen" },
    ],
  },
  {
    slug: "the-haven-apartment",
    name: "The Haven Apartment",
    intent: "Rent",
    type: "Apartment",
    location: "Kimbo",
    setting: "Kimbo, Ruiru",
    price: 39000,
    priceLabel: "KSh 39,000 / month",
    bedrooms: 2,
    bathrooms: 1,
    area: 105,
    summary: "Soft light and a calm interior for coming home to yourself.",
    description: "An illustrative apartment with a welcoming living area and a simple, versatile layout. The concept brings warmth and ease to a compact footprint.",
    amenities: ["Open living", "Natural light", "Storage", "Parking"],
    images: [
      { src: "/images/residence-five.jpg", alt: "Bright living room with pale blue seating" },
      { src: "/images/residence-two.jpg", alt: "Open-plan living and kitchen space" },
      { src: "/images/residence-four.jpg", alt: "Contemporary dining area" },
    ],
  },
  {
    slug: "the-atrium-home",
    name: "The Atrium Home",
    intent: "Buy",
    type: "Maisonette",
    location: "Kamakis",
    setting: "Kamakis, Eastern Bypass",
    price: 33000000,
    priceLabel: "KSh 33,000,000",
    bedrooms: 5,
    bathrooms: 4,
    area: 360,
    summary: "Generous proportions and striking architecture for a new chapter.",
    description: "This sample home concept brings together generous shared rooms and quieter private spaces. Its open character is designed to make daily routines and memorable gatherings feel equally at home.",
    amenities: ["Garden", "Terrace", "Open-plan living", "Home office", "Parking"],
    images: [
      { src: "/images/hero-house.jpg", alt: "Modern architectural home at dusk" },
      { src: "/images/residence-four.jpg", alt: "Light-filled dining room" },
      { src: "/images/residence-five.jpg", alt: "Relaxed modern living room" },
    ],
  },
];

const additionalConcepts: Array<{
  slug: string; name: string; intent: Property["intent"]; type: Property["type"];
  location: string; price: number; bedrooms: number; bathrooms: number; area: number;
  summary: string; amenities: string[]; photo: string;
}> = [
  { slug: "kimbo-garden-bungalow", name: "Kimbo Garden Bungalow", intent: "Rent", type: "Bungalow", location: "Kimbo", price: 70000, bedrooms: 3, bathrooms: 2, area: 165, summary: "Single-level living with a shaded garden and easy family flow.", amenities: ["Garden", "Covered patio", "Parking"], photo: "residence-one.jpg" },
  { slug: "kenyatta-road-maisonette", name: "Kenyatta Road Maisonette", intent: "Rent", type: "Maisonette", location: "Kenyatta Road", price: 100000, bedrooms: 3, bathrooms: 3, area: 210, summary: "A bright two-storey layout with room to gather and retreat.", amenities: ["Family room", "Balcony", "Parking"], photo: "residence-three.jpg" },
  { slug: "eastern-bypass-family-home", name: "Eastern Bypass Family Home", intent: "Rent", type: "Own-compound house", location: "Eastern Bypass", price: 125000, bedrooms: 4, bathrooms: 3, area: 255, summary: "Generous family rooms and a private outdoor edge.", amenities: ["Private garden", "Study", "Parking"], photo: "hero-house.jpg" },
  { slug: "membley-five-bedroom", name: "Membley Five Bedroom", intent: "Rent", type: "Maisonette", location: "Membley", price: 150000, bedrooms: 5, bathrooms: 4, area: 310, summary: "A spacious concept for larger households and shared moments.", amenities: ["Terrace", "Family room", "Parking"], photo: "residence-three.jpg" },
  { slug: "ruiru-studio-court", name: "Ruiru Courtyard Apartment", intent: "Buy", type: "Apartment", location: "Ruiru", price: 6800000, bedrooms: 2, bathrooms: 2, area: 96, summary: "A compact, light-led home concept with flexible living space.", amenities: ["Balcony", "Open kitchen", "Parking"], photo: "residence-two.jpg" },
  { slug: "mugutha-terrace-apartment", name: "Mugutha Terrace Apartment", intent: "Buy", type: "Apartment", location: "Mugutha", price: 9000000, bedrooms: 3, bathrooms: 2, area: 126, summary: "An apartment with a generous living zone and terrace outlook.", amenities: ["Terrace", "Storage", "Parking"], photo: "residence-five.jpg" },
  { slug: "kamakis-garden-maisonette", name: "Kamakis Garden Maisonette", intent: "Buy", type: "Maisonette", location: "Kamakis", price: 23500000, bedrooms: 4, bathrooms: 3, area: 268, summary: "A warm architectural concept with layered indoor-outdoor spaces.", amenities: ["Garden", "Family room", "Parking"], photo: "residence-one.jpg" },
  { slug: "membley-private-residence", name: "Membley Private Residence", intent: "Buy", type: "Own-compound house", location: "Membley", price: 32000000, bedrooms: 5, bathrooms: 4, area: 335, summary: "Private outdoor space and flexible rooms for a changing family.", amenities: ["Private garden", "Study", "Terrace"], photo: "hero-house.jpg" },
  { slug: "mugutha-courtyard-home", name: "Mugutha Courtyard Home", intent: "Buy", type: "Own-compound house", location: "Mugutha", price: 14500000, bedrooms: 3, bathrooms: 2, area: 182, summary: "A considered house concept wrapped around everyday outdoor life.", amenities: ["Courtyard", "Open kitchen", "Parking"], photo: "residence-three.jpg" },
  { slug: "bypass-blue-apartment", name: "Bypass Blue Apartment", intent: "Rent", type: "Apartment", location: "Eastern Bypass", price: 55000, bedrooms: 2, bathrooms: 2, area: 102, summary: "A calm apartment base with a practical layout and soft light.", amenities: ["Balcony", "Storage", "Parking"], photo: "residence-five.jpg" },
];

properties.push(...additionalConcepts.map((item) => ({
  slug: item.slug,
  name: item.name,
  intent: item.intent,
  type: item.type,
  location: item.location,
  setting: `${item.location}, ${item.location === "Eastern Bypass" || item.location === "Kamakis" ? "Nairobi fringe" : "Kiambu"}`,
  price: item.price,
  priceLabel: `KSh ${item.price.toLocaleString("en-US")}${item.intent === "Rent" ? " / month" : ""}`,
  bedrooms: item.bedrooms,
  bathrooms: item.bathrooms,
  area: item.area,
  summary: item.summary,
  description: `${item.summary} This illustrative ${item.type.toLowerCase()} in ${item.location} demonstrates how LOUIE HOMES could present a considered home search. Photography and features are design examples only.`,
  amenities: item.amenities,
  images: [
    { src: `/images/${item.photo}`, alt: "Architectural image used for this illustrative home concept" },
    { src: "/images/residence-four.jpg", alt: "Illustrative contemporary dining interior" },
    { src: "/images/residence-two.jpg", alt: "Illustrative light-filled living interior" },
  ],
})));

export function getProperty(slug: string) {
  return properties.find((property) => property.slug === slug);
}
