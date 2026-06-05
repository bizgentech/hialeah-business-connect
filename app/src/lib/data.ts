import type { Business } from "@/components/ui/BusinessCard";
import type { Offer } from "@/components/ui/OfferCard";

export const BUSINESSES: Business[] = [
  {
    id: "1",
    name: "El Rincón Cubano",
    category: "Restaurant",
    area: "West Hialeah",
    description:
      "Authentic Cuban cuisine serving the community since 1995. Famous for our classic cubano sandwich and daily lunch specials.",
    phone: "305-555-0101",
    website: "https://example.com",
    isFeatured: true,
    isVerified: true,
  },
  {
    id: "2",
    name: "Hialeah Auto Parts",
    category: "Retail",
    area: "East Hialeah",
    description:
      "Your reliable source for automotive parts and accessories. Locally owned and operated with expert advice.",
    phone: "305-555-0102",
    isVerified: true,
  },
  {
    id: "3",
    name: "Apex Financial Services",
    category: "Services",
    area: "Downtown Hialeah",
    description:
      "Comprehensive tax prep and financial planning for small businesses and individuals in Miami-Dade.",
    phone: "305-555-0103",
    website: "https://example.com",
  },
  {
    id: "4",
    name: "Hialeah Flowers & Gifts",
    category: "Retail",
    area: "West Hialeah",
    description:
      "Fresh floral arrangements and unique gift baskets for every occasion. Same-day delivery available.",
    phone: "305-555-0104",
    isVerified: true,
  },
  {
    id: "5",
    name: "Salud Wellness Center",
    category: "Health",
    area: "Hialeah Gardens",
    description:
      "Holistic health services including chiropractic care, massage therapy, and nutritional counseling.",
    phone: "305-555-0105",
    website: "https://example.com",
    isFeatured: true,
    isVerified: true,
  },
  {
    id: "6",
    name: "TechFix Express",
    category: "Services",
    area: "East Hialeah",
    description:
      "Fast and reliable phone, tablet, and computer repair. Most repairs completed in under 2 hours.",
    phone: "305-555-0106",
  },
];

export const OFFERS: Offer[] = [
  {
    id: "1",
    businessName: "El Rincón Cubano",
    category: "Restaurant",
    title: "Lunch Special – Cubano + Drink",
    description:
      "Enjoy our legendary cubano sandwich with a fountain drink for just $8.99. Monday–Friday, 11am–3pm.",
    discount: "20% OFF",
    expires: "Jun 30, 2026",
    isHot: true,
  },
  {
    id: "2",
    businessName: "Salud Wellness Center",
    category: "Health",
    title: "First Chiropractic Visit",
    description:
      "New patients receive their first consultation and adjustment at no cost. No insurance required.",
    discount: "FREE",
    expires: "Jul 15, 2026",
  },
  {
    id: "3",
    businessName: "TechFix Express",
    category: "Services",
    title: "Screen Repair – Any Phone",
    description:
      "Get your cracked screen replaced for 15% off the standard rate. Includes 30-day warranty.",
    discount: "15% OFF",
    expires: "Jun 20, 2026",
    isHot: true,
  },
  {
    id: "4",
    businessName: "Hialeah Flowers & Gifts",
    category: "Retail",
    title: "Summer Bouquet Bundle",
    description:
      "Purchase any arrangement over $40 and receive a complimentary gift card for $10.",
    discount: "$10 BONUS",
    expires: "Aug 1, 2026",
  },
];

export const CATEGORIES = [
  "All",
  "Restaurants",
  "Retail",
  "Services",
  "Health",
  "Auto",
  "Beauty",
  "Education",
];

export const AREAS = [
  "All Areas",
  "West Hialeah",
  "East Hialeah",
  "Hialeah Gardens",
  "Downtown Hialeah",
];
