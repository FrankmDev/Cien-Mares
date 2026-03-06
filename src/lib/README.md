# Estructura del Proyecto - Cien Mares

## Optimizaciones realizadas para Astro

### 1. Componentización

Se crearon componentes UI reutilizables en `src/components/ui/`:
- `SectionLabel.astro` - Label de sección con punto pulsante
- `SectionTitle.astro` - Título de sección estilizado
- `TestimonialCard.astro` - Tarjeta de testimonio

### 2. Utilidades compartidas

`src/lib/animations.ts` - Funciones GSAP reutilizables:
- `fadeUp()` - Animación de entrada desde abajo
- `cleanupScrollTriggers()` - Limpieza de animaciones
- `ANIMATION_CONFIG` - Configuración centralizada

### 3. Datos centralizados

`src/data/navigation.ts` - Todos los datos estáticos:
- Navegación
- Testimonios
- Iconos SVG
- Información de contacto

### 4. Tipos mejorados

`src/types/index.ts` - Interfaces TypeScript para todo el proyecto

### 5. Patrones de limpieza

Todas las secciones ahora usan `cleanupScrollTriggers()` para evitar memory leaks:

```typescript
document.addEventListener("astro:before-swap", () => {
  cleanupScrollTriggers(triggers);
});
```

### 6. Exports organizados

Cada carpeta tiene su `index.ts` para imports limpios:

```typescript
import { SectionLabel, SectionTitle } from "../ui";
import { cleanupScrollTriggers } from "../../lib/animations";
```

## Estructura de archivos

```
src/
├── components/
│   ├── home/           # Secciones de la home
│   ├── layout/         # Header, Footer
│   ├── shared/         # Preloader
│   └── ui/            # Componentes reutilizables
├── data/              # Datos estáticos
├── lib/               # Utilidades
├── types/             # TypeScript types
└── pages/             # Rutas de Astro
```

## Beneficios

1. **Código DRY** - Componentes reutilizables
2. **Mantenibilidad** - Cambios centralizados
3. **Type safety** - Interfaces completas
4. **Performance** - Limpieza de animaciones
5. **Legibilidad** - Imports organizados
