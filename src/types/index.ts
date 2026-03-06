/**
 * CIEN MARES - Type Definitions
 * Centralized TypeScript interfaces and types
 */

// ═══════════════════════════════════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════════════════════════════════

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
  isExternal?: boolean;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

// ═══════════════════════════════════════════════════════════════
// SERVICES
// ═══════════════════════════════════════════════════════════════

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features?: string[];
  link?: {
    href: string;
    text: string;
  };
  image?: string;
  price?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  services: Service[];
}

// ═══════════════════════════════════════════════════════════════
// TESTIMONIALS
// ═══════════════════════════════════════════════════════════════

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role?: string;
  company?: string;
  avatar?: string;
  rating?: number;
}

// ═══════════════════════════════════════════════════════════════
// TEAM
// ═══════════════════════════════════════════════════════════════

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio?: string;
  avatar?: string;
  social?: SocialLink[];
}

// ═══════════════════════════════════════════════════════════════
// CONTENT
// ═══════════════════════════════════════════════════════════════

export interface Feature {
  icon: string;
  title: string;
  description: string;
  features?: string[];
  link?: {
    href: string;
    text: string;
    external?: boolean;
  };
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
  icon?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Stat {
  value: string;
  label: string;
  description?: string;
  icon?: string;
}

// ═══════════════════════════════════════════════════════════════
// UI COMPONENTS
// ═══════════════════════════════════════════════════════════════

export type Theme = "dark" | "light" | "surface" | "gradient";

export type Align = "left" | "center" | "right";

export type Size = "sm" | "md" | "lg" | "xl";

export type Variant = "default" | "highlighted" | "minimal";

export interface Button {
  text: string;
  href: string;
  external?: boolean;
  variant?: "primary" | "secondary" | "outline";
}

// ═══════════════════════════════════════════════════════════════
// CONTACT
// ═══════════════════════════════════════════════════════════════

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  hours?: string;
  mapUrl?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

// ═══════════════════════════════════════════════════════════════
// METADATA
// ═══════════════════════════════════════════════════════════════

export interface PageMeta {
  title: string;
  description: string;
  image?: string;
  canonical?: string;
  noindex?: boolean;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  logo: string;
  social: {
    instagram?: string;
    facebook?: string;
    linkedin?: string;
    twitter?: string;
    youtube?: string;
  };
  contact: ContactInfo;
}

// ═══════════════════════════════════════════════════════════════
// ANIMATIONS
// ═══════════════════════════════════════════════════════════════

export interface AnimationOptions {
  duration?: number;
  delay?: number;
  ease?: string;
  stagger?: number;
  start?: string;
  markers?: boolean;
}

export type RevealDirection = "up" | "down" | "left" | "right" | "scale" | "fade";

// ═══════════════════════════════════════════════════════════════
// BOATS / ALQUILER
// ═══════════════════════════════════════════════════════════════

export interface Boat {
  id: string;
  name: string;
  type: string;
  length: number;
  capacity: number;
  pricePerDay: number;
  images: string[];
  features: string[];
  description?: string;
  specifications?: {
    beam?: number;
    draft?: number;
    year?: number;
    engine?: string;
    fuel?: string;
  };
}

// ═══════════════════════════════════════════════════════════════
// COURSES / ACADEMY
// ═══════════════════════════════════════════════════════════════

export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: "beginner" | "intermediate" | "advanced";
  price: number;
  image?: string;
  instructor?: string;
  maxStudents?: number;
  includes?: string[];
  schedule?: string[];
}

// ═══════════════════════════════════════════════════════════════
// API RESPONSES
// ═══════════════════════════════════════════════════════════════

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  perPage: number;
  totalPages: number;
}
