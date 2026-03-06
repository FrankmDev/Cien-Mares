# CIEN MARES - Design System

## 🎨 Tokens de Diseño

### Colores

| Token | Valor | Uso |
|-------|-------|-----|
| `--color-bg` | `#02060a` | Fondo principal oscuro |
| `--color-bg-light` | `#FAFAFA` | Fondo claro |
| `--color-surface` | `#141414` | Superficie elevada |
| `--color-accent` | `#CFA35A` | Oro/acento principal |
| `--color-accent-light` | `#E8CB8E` | Dorado claro |
| `--color-accent-dark` | `#8E6F38` | Dorado oscuro |
| `--color-text` | `#F2F2F2` | Texto principal |
| `--color-text-muted` | `#9E9E9E` | Texto secundario |

### Tipografía

| Elemento | Font | Tamaño | Peso | Line-height |
|----------|------|--------|------|-------------|
| Hero Display | Space Grotesk | `clamp(3rem, 10vw, 9rem)` | 900 | 0.85 |
| Section Title | Space Grotesk | `clamp(2rem, 4vw, 4rem)` | 800 | 0.9 |
| Heading | Space Grotesk | `clamp(1.5rem, 3vw, 2.5rem)` | 700 | 1.1 |
| Body | Inter | `1rem` | 400 | 1.7 |
| Label | JetBrains Mono | `0.65rem` | 600 | 1.4 |

### Espaciado

| Token | Valor |
|-------|-------|
| `--section-padding` | `clamp(5rem, 10vw, 9rem)` |
| `--container-max` | `1400px` |
| `--container-padding` | `clamp(1rem, 3vw, 3rem)` |

### Animaciones

| Nombre | Easing | Duration |
|--------|--------|----------|
| Premium | `cubic-bezier(0.16, 1, 0.3, 1)` | 400ms-800ms |
| Expo | `cubic-bezier(0.19, 1, 0.22, 1)` | 600ms-1200ms |
| Smooth | `cubic-bezier(0.4, 0, 0.2, 1)` | 300ms-500ms |

---

## 🧩 Componentes UI

### PageHeader
Encabezado estandarizado para páginas internas.

```astro
---
import { PageHeader } from "@components/ui";
---

<PageHeader
  title="Alquiler de"
  highlighted="Embarcaciones"
  description="Descubre nuestra flota de embarcaciones de lujo..."
  badge="SERVICIO"
  background="dark"
  align="center"
/>
```

### ContentSection
Sección de contenido flexible con múltiples layouts.

```astro
<ContentSection
  title="Nuestros Servicios"
  subtitle="Todo lo que necesitas para tu embarcación"
  layout="3-col"
  background="surface"
  spacing="lg"
>
  <!-- Cards aquí -->
</ContentSection>
```

### FeatureCard
Tarjeta de características con icono.

```astro
<FeatureCard
  icon={ICONS.anchor}
  title="Mantenimiento"
  description="Servicio completo de mantenimiento..."
  features={["Revisión técnica", "Limpieza", "Reparaciones"]}
  link={{ href: "/contacto", text: "Solicitar" }}
/>
```

### InfoCard
Tarjeta informativa con icono.

```astro
<InfoCard
  icon={ICONS.clock}
  title="Horario de Atención"
  value="24/7"
  description="Atención permanente todo el año"
/>
```

### CTABanner
Banner de llamada a la acción.

```astro
<CTABanner
  title="¿Listo para comenzar?"
  highlighted="Contáctanos"
  description="Nuestro equipo está listo para ayudarte"
  primaryButton={{ text: "Contactar", href: "/contacto" }}
  secondaryButton={{ text: "Ver Servicios", href: "/servicios" }}
/>
```

### ProcessSteps
Visualización de procesos paso a paso.

```astro
<ProcessSteps
  steps={[
    { number: 1, title: "Contacto", description: "..." },
    { number: 2, title: "Evaluación", description: "..." },
  ]}
  direction="horizontal"
/>
```

---

## 🎯 Clases CSS Utilitarias

### Contenedores
```css
.container-main    /* Max-width: 1400px, padding responsive */
.container-wide    /* Max-width: 1600px */
.container-narrow  /* Max-width: 1100px */
```

### Secciones
```css
.section      /* Padding estándar de sección */
.section-sm   /* 3rem padding */
.section-md   /* 5rem padding */
.section-lg   /* 9rem padding */
.section-xl   /* 12rem padding */
```

### Tipografía
```css
.heading-hero       /* Título hero con gradiente */
.heading-section    /* Título de sección */
.heading-accent     /* Subtítulo dorado */
.text-body-lg       /* Body grande */
.text-label         /* Label mono dorado */
.text-gradient-gold /* Texto degradado dorado */
```

### Botones
```css
.btn           /* Botón base */
.btn-primary   /* Botón dorado */
.btn-secondary /* Botón outline */
.btn-sm        /* Pequeño */
.btn-lg        /* Grande */
```

### Tarjetas
```css
.card          /* Card base con hover */
.card-light    /* Card para fondos claros */
```

### Efectos
```css
.glass         /* Efecto vidrio */
.glass-dark    /* Vidrio oscuro */
.gpu           /* Aceleración GPU */
.scrollbar-hide /* Ocultar scrollbar */
.text-balance   /* Balance de texto */
```

---

## 📦 Imports Rápidos

```typescript
// Componentes UI
import { 
  PageHeader, 
  ContentSection, 
  FeatureCard, 
  InfoCard,
  CTABanner,
  ProcessSteps,
  QuoteBlock 
} from "@components/ui";

// Iconos
import { ICONS } from "@lib/icons";

// Animaciones
import { 
  fadeInUp, 
  staggerFadeIn, 
  cleanupScrollTriggers 
} from "@lib/animations";
```

---

## 🎬 Animaciones

### Scroll Reveal (CSS)
```html
<div data-reveal>Desvanecer arriba</div>
<div data-reveal="left">Desvanecer izquierda</div>
<div data-reveal="scale">Escala</div>
<div data-delay="2">Con delay 0.2s</div>
```

### GSAP ScrollTrigger
```typescript
fadeInUp(".element", ".trigger", { y: 60, duration: 1 });
staggerFadeIn(".container", ".item", { stagger: 0.1 });
```

### Cleanup (IMPORTANTE)
```typescript
// En todos los componentes con animaciones
document.addEventListener("astro:before-swap", () => {
  cleanupScrollTriggers();
});
```

---

## 🌓 Theme Adaptation

Las secciones pueden indicar su tema para el header:

```html
<section data-theme="dark">  <!-- Header transparente oscuro -->
<section data-theme="light"> <!-- Header con fondo claro -->
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Ancho | Uso |
|------------|-------|-----|
| `sm` | 640px | Móviles grandes |
| `md` | 768px | Tablets |
| `lg` | 1024px | Desktop pequeño |
| `xl` | 1280px | Desktop |
| `2xl` | 1536px | Desktop grande |
