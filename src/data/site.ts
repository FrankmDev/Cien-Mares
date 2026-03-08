/**
 * Site Configuration - Centralized site-wide data
 */

export const siteConfig = {
  name: "Cien Mares",
  tagline: "Experiencias Náuticas Premium",
  description: "Servicios náuticos de excelencia en Cádiz. Alquiler de embarcaciones, academia náutica homologada, gestoría y traslados internacionales.",
  url: "https://cienmares.es",
  email: "info@cienmares.es",
  phone: "+34 605 18 37 85",
  whatsapp: "+34605183785",
  address: {
    street: "El Puerto de Santa María",
    city: "Cádiz",
    country: "España",
    postalCode: "11500",
  },
  social: {
    instagram: "https://instagram.com/cienmares",
    facebook: "https://facebook.com/cienmares",
  },
  hours: {
    weekday: "09:00 - 19:00",
    saturday: "10:00 - 14:00",
    sunday: "Cerrado",
  },
  founded: 2010,
} as const;

export const pageMetadata = {
  home: {
    title: "Cien Mares | Experiencias Náuticas Premium en Cádiz",
    description: "Servicios náuticos de excelencia en Cádiz. Alquiler de embarcaciones, academia náutica homologada, gestoría y traslados internacionales.",
    image: "/images/og-home.jpg",
  },
  navegar: {
    title: "Navegar | Alquiler de Barcos en Cádiz | Cien Mares",
    description: "Alquila velero, lancha o yate en la costa de Cádiz. Excursiones personalizadas desde El Puerto de Santa María. Equipamiento premium y patrón profesional incluido.",
    image: "/images/og-navegar.jpg",
  },
  aprender: {
    title: "Academia Náutica | Cien Mares | Títulos de Recreo en Cádiz",
    description: "Academia náutica homologada EEND-CA-67 en Cádiz. Cursos de Licencia, PNB, PER, Patrón y Capitán de Yate. 15 años formando navegantes.",
    image: "/images/og-aprender.jpg",
  },
  gestionar: {
    title: "Gestión Náutica | Gestoría y Traslados | Cien Mares",
    description: "Gestoría náutica completa: inscripciones, certificados, cambios de titularidad. Traslados de embarcaciones nacionales e internacionales.",
    image: "/images/og-gestionar.jpg",
  },
  contacto: {
    title: "Contacto | Cien Mares | Servicios Náuticos en Cádiz",
    description: "Contacta con Cien Mares. Teléfono: +34 605 18 37 85. Email: info@cienmares.es. WhatsApp disponible. Estamos en El Puerto de Santa María, Cádiz.",
    image: "/images/og-contacto.jpg",
  },
} as const;

export type PageKey = keyof typeof pageMetadata;
