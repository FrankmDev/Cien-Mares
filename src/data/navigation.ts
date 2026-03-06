import type { NavLink, SocialLink, ContactInfo, Stat } from "../types";

// Navegacion principal
export const navLinks: NavLink[] = [
  { href: "/navegar", label: "Navegar" },
  { href: "/aprender", label: "Aprender" },
  { href: "/gestionar", label: "Gestionar" },
  { href: "/contacto", label: "Contacto" },
];

// Enlaces del footer
export const footerLinks = {
  services: [
    { href: "/navegar", label: "Alquiler" },
    { href: "/aprender", label: "Academia" },
    { href: "/gestionar", label: "Gestoría" },
  ],
  company: [
    { href: "/historias", label: "Historias" },
    { href: "/contacto", label: "Contacto" },
  ],
};

// Redes sociales
export const socialLinks: SocialLink[] = [
  { href: "https://instagram.com/cienmares", label: "Instagram" },
  { href: "https://wa.me/34605183785", label: "WhatsApp" },
];

// Informacion de contacto
export const contactInfo: ContactInfo = {
  phone: "+34 605 18 37 85",
  email: "info@cienmares.es",
  address: ["Puerto de Conil de la Frontera", "11140 Cádiz, España"],
};

// Estadisticas para la home
export const homeStats: Stat[] = [
  { value: "15+", label: "Años" },
  { value: "50+", label: "Embarcaciones" },
  { value: "2K+", label: "Clientes" },
  { value: "4.9", suffix: "/5", label: "Reviews" },
];

// Testimonios
export const testimonials = [
  {
    quote: "La privacidad absoluta y la ejecución perfecta de nuestra travesía superó todas nuestras expectativas.",
    author: "Alberto de la C.",
    role: "Chárter Privado",
    location: "Ibiza",
    rating: 5,
  },
  {
    quote: "Confiamos la gestión integral de nuestro yate a Cien Mares hace tres años. Su meticulosidad es incomparable.",
    author: "María Valdés",
    role: "Gestión Integral",
    location: "Sotogrande",
    rating: 5,
  },
  {
    quote: "La Academia Náutica te enseña a leer el mar. Una experiencia formativa de élite con instructores excepcionales.",
    author: "Elena Rodríguez",
    role: "Academia Náutica",
    location: "Cádiz",
    rating: 5,
  },
  {
    quote: "El servicio de traslados internacionales fue impecable. Profesionalidad y puntualidad en cada puerto.",
    author: "Carlos Méndez",
    role: "Traslados",
    location: "Málaga",
    rating: 5,
  },
  {
    quote: "Una experiencia inolvidable. El equipo de Cien Mares hizo que nuestra luna de miel fuera mágica.",
    author: "Laura & Javier",
    role: "Chárter Privado",
    location: "Menorca",
    rating: 5,
  },
  {
    quote: "Excelencia en cada detalle. Desde la reserva hasta el desembarco, todo fue perfecto.",
    author: "Roberto Sánchez",
    role: "Eventos Corporativos",
    location: "Marbella",
    rating: 5,
  },
] as const;

// Iconos SVG para redes sociales
export const socialIcons: Record<string, string> = {
  Instagram:
    "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z",
  WhatsApp:
    "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z",
};
