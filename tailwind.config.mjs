/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      // ═══════════════════════════════════════════════════════════════
      // COLORES - Sistema completo
      // ═══════════════════════════════════════════════════════════════
      colors: {
        // Fondos
        "cm-bg": "#02060a",
        "cm-bg-light": "#FAFAFA",
        "cm-surface": "#0A0A0A",
        "cm-surface-light": "#141414",
        "cm-surface-white": "#FFFFFF",
        
        // Acentos Dorados
        "cm-accent": "#CFA35A",
        "cm-accent-light": "#E8CB8E",
        "cm-accent-lighter": "#F5E6C8",
        "cm-accent-dark": "#8E6F38",
        "cm-accent-darker": "#6B5228",
        
        // Textos
        "cm-text": "#F2F2F2",
        "cm-text-dark": "#0A0A0A",
        "cm-text-muted": "#9E9E9E",
        "cm-text-muted-light": "#6B7280",
        
        // Bordes
        "cm-border": "rgba(255, 255, 255, 0.08)",
        "cm-border-dark": "rgba(0, 0, 0, 0.08)",
        "cm-border-accent": "rgba(207, 163, 90, 0.3)",
        
        // Glows
        "cm-glow": "rgba(207, 163, 90, 0.15)",
        "cm-glow-strong": "rgba(207, 163, 90, 0.3)",
      },
      
      // ═══════════════════════════════════════════════════════════════
      // TIPOGRAFÍA - Escala completa
      // ═══════════════════════════════════════════════════════════════
      fontFamily: {
        display: ["Space Grotesk", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      
      fontSize: {
        // Display - Títulos grandes
        "display-xl": ["clamp(4rem, 14vw, 12rem)", { 
          lineHeight: "0.8", 
          letterSpacing: "-0.04em",
          fontWeight: "900"
        }],
        "display-lg": ["clamp(3rem, 10vw, 8rem)", { 
          lineHeight: "0.85", 
          letterSpacing: "-0.04em",
          fontWeight: "900"
        }],
        "display-md": ["clamp(2.5rem, 6vw, 5rem)", { 
          lineHeight: "0.9", 
          letterSpacing: "-0.03em",
          fontWeight: "800"
        }],
        "display-sm": ["clamp(2rem, 4vw, 3.5rem)", { 
          lineHeight: "0.95", 
          letterSpacing: "-0.02em",
          fontWeight: "800"
        }],
        
        // Headings
        "heading-xl": ["clamp(1.75rem, 3vw, 2.5rem)", { 
          lineHeight: "1.1", 
          letterSpacing: "-0.01em",
          fontWeight: "700"
        }],
        "heading-lg": ["clamp(1.5rem, 2.5vw, 2rem)", { 
          lineHeight: "1.15", 
          letterSpacing: "-0.01em",
          fontWeight: "700"
        }],
        "heading-md": ["clamp(1.25rem, 2vw, 1.5rem)", { 
          lineHeight: "1.2",
          fontWeight: "600"
        }],
        "heading-sm": ["1.125rem", { 
          lineHeight: "1.3",
          fontWeight: "600"
        }],
        
        // Body
        "body-xl": ["clamp(1.125rem, 1.5vw, 1.25rem)", { 
          lineHeight: "1.8",
          letterSpacing: "0.01em"
        }],
        "body-lg": ["1.125rem", { lineHeight: "1.75" }],
        "body-md": ["1rem", { lineHeight: "1.7" }],
        "body-sm": ["0.875rem", { lineHeight: "1.6" }],
        
        // Mono/Labels
        "mono-xs": ["0.55rem", { 
          lineHeight: "1.4", 
          letterSpacing: "0.3em",
          fontWeight: "500"
        }],
        "mono-sm": ["0.6rem", { 
          lineHeight: "1.4", 
          letterSpacing: "0.25em",
          fontWeight: "500"
        }],
        "mono-md": ["0.65rem", { 
          lineHeight: "1.4", 
          letterSpacing: "0.2em",
          fontWeight: "600"
        }],
        "mono-lg": ["0.75rem", { 
          lineHeight: "1.4", 
          letterSpacing: "0.15em",
          fontWeight: "600"
        }],
      },
      
      // ═══════════════════════════════════════════════════════════════
      // ESPACIADO - Sistema 8px base
      // ═══════════════════════════════════════════════════════════════
      spacing: {
        // Secciones
        "section-xs": "4rem",
        "section-sm": "5rem",
        "section-md": "7rem",
        "section-lg": "9rem",
        "section-xl": "11rem",
        "section-2xl": "14rem",
        
        // Componentes
        "component-xs": "0.5rem",
        "component-sm": "1rem",
        "component-md": "1.5rem",
        "component-lg": "2rem",
        "component-xl": "3rem",
        "component-2xl": "4rem",
      },
      
      // ═══════════════════════════════════════════════════════════════
      // BORDES - Radio consistente
      // ═══════════════════════════════════════════════════════════════
      borderRadius: {
        "btn": "9999px",        // Botones pill
        "card": "1.5rem",       // Cards estándar
        "card-lg": "2rem",      // Cards grandes
        "card-xl": "3rem",      // Cards extra
        "icon": "1rem",         // Iconos/badges
        "icon-lg": "1.25rem",   // Iconos grandes
        "full": "9999px",
      },
      
      // ═══════════════════════════════════════════════════════════════
      // SOMBRAS
      // ═══════════════════════════════════════════════════════════════
      boxShadow: {
        "card": "0 10px 40px -15px rgba(0, 0, 0, 0.2)",
        "card-hover": "0 20px 60px -15px rgba(207, 163, 90, 0.15)",
        "card-dark": "0 10px 40px -15px rgba(0, 0, 0, 0.5)",
        "glow": "0 0 30px rgba(207, 163, 90, 0.3)",
        "glow-strong": "0 0 60px rgba(207, 163, 90, 0.4)",
        "glow-subtle": "0 0 20px rgba(207, 163, 90, 0.15)",
      },
      
      // ═══════════════════════════════════════════════════════════════
      // ANIMACIONES
      // ═══════════════════════════════════════════════════════════════
      animation: {
        // Entradas
        "fade-in-up": "fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in-down": "fadeInDown 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in-left": "fadeInLeft 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in-right": "fadeInRight 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "scale-in": "scaleIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        
        // Reveal
        "reveal-up": "revealUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "reveal-image": "revealImage 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        
        // Flotantes
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "float-subtle": "floatSubtle 8s ease-in-out infinite",
        
        // Rotaciones
        "spin-slow": "spin 20s linear infinite",
        "spin-slower": "spin 30s linear infinite",
        
        // Pulso
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite",
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
        
        // Shimmer
        "shimmer": "shimmer 3s linear infinite",
        
        // Scroll
        "bounce-scroll": "bounceScroll 2s ease-in-out infinite",
      },
      
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInLeft: {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeInRight: {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        revealUp: {
          "0%": { opacity: "0", transform: "translateY(60px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        revealImage: {
          "0%": { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" },
          "100%": { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        floatSubtle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.3", transform: "scale(1)" },
          "50%": { opacity: "0.6", transform: "scale(1.05)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        bounceScroll: {
          "0%, 100%": { transform: "translateY(0)", opacity: "1" },
          "50%": { transform: "translateY(8px)", opacity: "0.5" },
        },
      },
      
      // ═══════════════════════════════════════════════════════════════
      // TRANSICIONES
      // ═══════════════════════════════════════════════════════════════
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
        expo: "cubic-bezier(0.19, 1, 0.22, 1)",
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
        bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      },
      
      transitionDuration: {
        200: "200ms",
        300: "300ms",
        400: "400ms",
        500: "500ms",
        600: "600ms",
        800: "800ms",
        1000: "1000ms",
        1200: "1200ms",
      },
      
      // ═══════════════════════════════════════════════════════════════
      // CONTAINERS
      // ═══════════════════════════════════════════════════════════════
      maxWidth: {
        "content": "1400px",
        "content-lg": "1600px",
        "content-sm": "1200px",
      },
      
      // ═══════════════════════════════════════════════════════════════
      // Z-INDEX
      // ═══════════════════════════════════════════════════════════════
      zIndex: {
        "behind": "-1",
        "base": "0",
        "content": "10",
        "header": "100",
        "overlay": "200",
        "modal": "300",
        "cursor": "9999",
        "preloader": "99999",
      },
    },
  },
  plugins: [
    // Plugin para utilidades personalizadas
    function({ addComponents, addUtilities }) {
      // Componentes reutilizables
      addComponents({
        // Contenedor estándar
        '.container-content': {
          width: '100%',
          maxWidth: '1400px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          '@screen lg': {
            paddingLeft: '3rem',
            paddingRight: '3rem',
          },
        },
        
        // Sección base
        '.section': {
          paddingTop: '7rem',
          paddingBottom: '7rem',
          '@screen lg': {
            paddingTop: '9rem',
            paddingBottom: '9rem',
          },
        },
        
        // Badge/Label
        '.badge': {
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.5rem 1rem',
          borderRadius: '9999px',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '0.65rem',
          fontWeight: '600',
          textTransform: 'uppercase',
          letterSpacing: '0.2em',
        },
        
        // Card base
        '.card': {
          borderRadius: '1.5rem',
          backgroundColor: '#FFFFFF',
          border: '1px solid rgba(0, 0, 0, 0.05)',
          transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          '&:hover': {
            borderColor: 'rgba(207, 163, 90, 0.3)',
            boxShadow: '0 20px 60px -15px rgba(207, 163, 90, 0.15)',
            transform: 'translateY(-4px)',
          },
        },
        
        // Botón base
        '.btn': {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.75rem',
          padding: '1rem 2rem',
          borderRadius: '9999px',
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: '0.875rem',
          fontWeight: '700',
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        },
        
        // Botón primario
        '.btn-primary': {
          backgroundColor: '#CFA35A',
          color: '#02060a',
          '&:hover': {
            backgroundColor: '#FFFFFF',
            boxShadow: '0 0 30px rgba(207, 163, 90, 0.4)',
            transform: 'scale(1.05)',
          },
          '&:active': {
            transform: 'scale(0.95)',
          },
        },
        
        // Botón secundario
        '.btn-secondary': {
          backgroundColor: 'transparent',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderColor: 'rgba(207, 163, 90, 0.5)',
            boxShadow: '0 0 20px rgba(207, 163, 90, 0.2)',
          },
        },
        
        // Icono circular
        '.icon-circle': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '3rem',
          height: '3rem',
          borderRadius: '9999px',
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: '#CFA35A',
            borderColor: '#CFA35A',
            transform: 'scale(1.1)',
          },
        },
        
        // Texto gradiente dorado
        '.text-gradient-gold': {
          background: 'linear-gradient(90deg, #CFA35A 0%, #E8CB8E 50%, #CFA35A 100%)',
          backgroundSize: '200% auto',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        },
        
        // Línea decorativa
        '.decorative-line': {
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #CFA35A, transparent)',
        },
      });
      
      // Utilidades adicionales
      addUtilities({
        // Hide scrollbar
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
        
        // Text balance
        '.text-balance': {
          textWrap: 'balance',
        },
        
        // GPU acceleration
        '.gpu': {
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          perspective: '1000px',
        },
        
        // Glass effect
        '.glass': {
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        },
        
        '.glass-dark': {
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
        },
      });
    },
  ],
};
