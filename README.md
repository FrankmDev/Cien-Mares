# Cienmares

## Alquiler de barcos · Academia Náutica · Gestoría Náutica · Traslados

Sitio web oficial de Cienmares, empresa náutica de Cádiz fundada por Manuel. 266+ reseñas excelentes en Google.

---

## 🛠 Stack Tecnológico

| Tecnología | Versión | Uso |
|------------|---------|-----|
| **Astro** | 5.x | Framework web estático |
| **Tailwind CSS** | 3.x | Estilos utilitarios |
| **@astrojs/tailwind** | 5.x | Integración oficial de Tailwind |
| **TypeScript** | 5.x | Tipado estático |

**Nota importante:** Se usa `@astrojs/tailwind` para la integración nativa. **No se usa PostCSS**.

---

## 📁 Estructura del Proyecto

```
cienmares/
├── src/
│   ├── components/        # Componentes Astro
│   │   ├── cards/         # Cards (barcos, títulos, etc.)
│   │   ├── global/        # Nav, Footer, WhatsApp
│   │   ├── hero/          # Heroes de página
│   │   ├── sections/      # Secciones reutilizables
│   │   └── ui/            # Componentes UI (Badge, Accordion)
│   ├── layouts/           # Layouts base
│   ├── pages/             # Páginas (file-based routing)
│   ├── data/              # Datos tipados (TypeScript)
│   └── styles/            # Estilos globales
│       ├── global.css     # Tailwind + animaciones + utilidades
│       └── typography.css # Sistema tipográfico
├── public/                # Archivos estáticos
├── astro.config.mjs       # Configuración Astro + Tailwind
├── tailwind.config.mjs    # Configuración Tailwind
└── package.json
```

---

## 🎨 Sistema de Diseño

### Colores (Tailwind)

```javascript
// tailwind.config.mjs
colors: {
  'abismo': '#020D18',     // Fondo oscuro
  'oceano': '#001F3F',     // Azul marino
  'horizonte': '#0A4A6E',  // Azul medio
  'espuma': '#F5F2EC',     // Blanco cálido
  'vela': '#FFFFFF',       // Blanco puro
  'arena': '#C9A96E',      // Dorado (acento)
  'sal': '#E8E4DC',        // Gris cálido
  'texto': '#0A0A0A',      // Negro
}
```

### Fuentes (Google Fonts)

- **Display:** Inter (300, 400, 500, 600, 700)
- **Body:** Playfair Display (400, 500, 600, 700 + italic)
- **Mono:** JetBrains Mono (400, 500)

### Uso en componentes

```astro
<!-- Tailwind puro -->
<div class="bg-abismo text-espuma p-6">
  <h1 class="text-4xl font-display font-bold text-arena">
    Título
  </h1>
  <p class="font-body text-lg">
    Texto en Playfair Display
  </p>
</div>

<!-- Con colores arbitrarios -->
<div class="bg-[#020D18] text-[#F5F2EC]">
  Contenido
</div>
```

---

## 🚀 Comandos

```bash
# Instalar dependencias
npm install

# Desarrollo (localhost:4321)
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

---

## ⚙️ Configuración Tailwind en Astro

La integración se configura en `astro.config.mjs`:

```javascript
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false, // Usamos nuestro propio CSS
    })
  ],
});
```

Y en `src/styles/global.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Tus estilos personalizados */
```

**Ventajas de esta configuración:**
- Sin PostCSS (menos dependencias)
- Integración nativa con Astro
- Hot reload rápido
- CSS optimizado automáticamente

---

## 📄 Páginas

| Ruta | Descripción |
|------|-------------|
| `/` | Home - Hero, servicios, rutas, testimonios |
| `/navegar` | Alquiler de barcos (flota, rutas, equipamiento) |
| `/aprender` | Academia náutica (títulos, precios) |
| `/gestionar` | Gestoría + Traslados (precios transparentes) |
| `/historias` | Blog + Testimonios cinematográficos |
| `/contacto` | Formulario + Info de contacto |
| `/legal`, `/privacidad` | Páginas legales |

---

## ✨ Características Implementadas

- ✅ **Integración Tailwind nativa** (@astrojs/tailwind)
- ✅ **Sin PostCSS** (configuración limpia)
- ✅ **Colores personalizados** en tailwind.config.mjs
- ✅ **Animaciones CSS** personalizadas
- ✅ **Google Fonts** cargadas vía CDN
- ✅ **Totalmente responsive**
- ✅ **SEO optimizado** (meta tags, Schema.org)
- ✅ **TypeScript** tipado estricto

---

## 📞 Contacto

- **WhatsApp:** +34 619 786 512
- **Email:** info@cienmares.es
- **Instagram:** @cien.mares

---

© 2025 Cienmares · Hecho con ❤️ en Cádiz
