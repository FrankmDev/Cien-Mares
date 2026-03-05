import type { NavLink, SocialLink } from '../types';

export const navLinks: NavLink[] = [
  { href: '/alquiler', label: 'Alquiler' },
  { href: '/academia', label: 'Academia' },
  { href: '/gestoria', label: 'Gestoría' },
  { href: '/traslados', label: 'Traslados' },
  { href: '/nosotros', label: 'Nosotros' },
];

export const footerLinks = {
  services: [
    { href: '/alquiler', label: 'Alquiler' },
    { href: '/academia', label: 'Academia' },
    { href: '/gestoria', label: 'Gestoría' },
    { href: '/traslados', label: 'Traslados' },
  ],
  company: [
    { href: '/nosotros', label: 'Nosotros' },
    { href: '/contacto', label: 'Contacto' },
  ],
};

export const socialLinks: SocialLink[] = [
  { href: 'https://instagram.com/cienmares', label: 'Instagram' },
  { href: 'https://wa.me/34605183785', label: 'WhatsApp' },
];

export const contactInfo = {
  phone: '+34 605 18 37 85',
  email: 'info@cienmares.es',
  address: ['Puerto de Conil de la Frontera', '11140 Cádiz, España'],
};
