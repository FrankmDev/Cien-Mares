# Arquitectura de Componentes - Cien Mares

Documentación de la estructura de componentes optimizada para Astro.

## 📁 Estructura de Carpetas

```
src/
├── components/
│   ├── home/                    # Secciones específicas de la homepage
│   │   ├── HeroSection/
│   │   │   ├── index.astro      # Componente principal
│   │   │   └── animations.ts    # Lógica GSAP separada
│   │   ├── StorySection/
│   │   ├── ServicesSection/
│   │   ├── MethodologySection/
│   │   ├── TestimonialsSection/
│   │   └── CTASection/
│   ├── shared/                  # Componentes UI compartidos
│   │   ├── SectionLabel.astro
│   │   ├── SectionHeader.astro
│   │   └── NoiseOverlay.astro
│   ├── ui/                      # Componentes UI atómicos
│   ├── cards/                   # Tarjetas reutilizables
│   ├── layout/                  # Header, Footer
│   └── global/                  # Cursor, navegación
├── lib/                         # Librería de utilidades
│   ├── animations/              # Configuración y helpers GSAP
│   │   ├── gsap-config.ts
│   │   └── index.ts
│   ├── constants/               # Constantes globales
│   │   └── theme.ts             # Colores, easing, spacing
│   └── utils/                   # Funciones utilitarias
├── types/                       # Definiciones TypeScript
│   ├── index.ts                 # Tipos globales
│   └── home.ts                  # Tipos específicos de homepage
├── data/                        # Datos estáticos
│   ├── services.ts
│   └── index.ts
└── pages/
    └── index.astro              # Página principal simplificada
```

## 🎯 Principios de Arquitectura

### 1. Separación de Responsabilidades

Cada sección tiene su propia carpeta con:
- `index.astro` - Template y estilos
- `animations.ts` - Lógica de animación GSAP
- `data.ts` - Datos específicos (si aplica)

```typescript
// HeroSection/animations.ts
import { gsap, ScrollTrigger } from '@/lib/animations';

export const HERO_SELECTORS = {
  section: '#hero-section',
  // ...
} as const;

export function initHeroAnimations(): void {
  // Lógica GSAP
}

export function cleanupHeroAnimations(): void {
  // Cleanup para View Transitions
}
```

### 2. Componentes Atómicos

Reutilización de elementos comunes:

```astro
<!-- SectionLabel - Usado en todas las secciones -->
<SectionLabel text="Quiénes Somos" accent light />

<!-- SectionHeader - Encabezado consistente -->
<SectionHeader
  label="Metodología"
  title="El Estándar"
  highlight="Cien Mares."
  description="..."
/>
```

### 3. Constantes Compartidas

```typescript
// lib/constants/theme.ts
export const COLORS = {
  primary: '#CFA35A',
  dark: { bg: '#030303', text: '#FAFAFA' },
  light: { bg: '#FAFAFA', text: '#0A0A0A' },
} as const;

export const EASING = {
  expo: { out: 'expo.out', in: 'expo.in' },
  power: { out: 'power3.out' },
} as const;
```

### 4. Cleanup de Animaciones

Todas las secciones implementan cleanup para View Transitions:

```astro
<script>
  import { initHeroAnimations, cleanupHeroAnimations } from './animations';

  document.addEventListener('astro:page-load', () => {
    initHeroAnimations();
  });

  document.addEventListener('astro:before-swap', () => {
    cleanupHeroAnimations();
  });
</script>
```

## 🔧 Path Aliases (tsconfig.json)

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["src/*"],
      "@components/*": ["src/components/*"],
      "@lib/*": ["src/lib/*"],
      "@types/*": ["src/types/*"],
      "@data/*": ["src/data/*"]
    }
  }
}
```

## 🎨 Sistema de Diseño

### Colores
- **Primary:** `#CFA35A` (Gold)
- **Dark BG:** `#030303`
- **Light BG:** `#FAFAFA`
- **Text Dark:** `#0A0A0A`
- **Text Light:** `#FAFAFA`

### Tipografía
- **Display:** Outfit (headings)
- **Body:** DM Sans (content)
- **Mono:** JetBrains Mono (labels, numbers)

### Spacing
- Container: `max-w-[120rem]`
- Section padding: `py-24 lg:py-40`
- Content padding: `px-6 lg:px-12`

## 🚀 Performance Optimizations

1. **Imágenes:**
   - Hero: `fetchpriority="high"`
   - Resto: `loading="lazy"`

2. **Scripts:**
   - GSAP solo carga en cliente
   - Cleanup en `astro:before-swap`

3. **CSS:**
   - Scoped por componente
   - Clases Tailwind con `will-change-transform`

4. **Animaciones:**
   - `scrub: true` para scroll-linked
   - Reduced motion support

## 📦 Agregar Nueva Sección

```bash
# 1. Crear estructura
mkdir -p src/components/home/NewSection
touch src/components/home/NewSection/index.astro
touch src/components/home/NewSection/animations.ts

# 2. Crear tipos (si necesario)
# types/home.ts

# 3. Exportar
# components/home/index.ts
export { default as NewSection } from './NewSection/index.astro';

# 4. Usar en index.astro
import { NewSection } from '@/components/home';
```

## 🧪 Testing

Verificar que:
- [ ] Las animaciones funcionan en desktop
- [ ] Las animaciones funcionan en móvil
- [ ] View Transitions limpian animaciones correctamente
- [ ] No hay errores de TypeScript
- [ ] Los imports con `@/` funcionan
