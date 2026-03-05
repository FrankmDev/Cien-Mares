/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Dark Luxury Palette
        "cm-bg": "#050505", // Deep Void
        "cm-surface": "#0A0A0A", // Even darker surface
        "cm-surface-light": "#141414",

        // Light Luxury Palette
        "cm-bg-light": "#FAFAFA",
        "cm-surface-white": "#FFFFFF",

        "cm-accent": "#CFA35A", // Gold/Brass accent
        "cm-accent-light": "#E8CB8E",
        "cm-accent-dark": "#8E6F38",

        "cm-text": "#F2F2F2",
        "cm-text-dark": "#0A0A0A",
        "cm-text-muted": "#9E9E9E",
        "cm-border": "rgba(255, 255, 255, 0.08)",
        "cm-border-dark": "rgba(0, 0, 0, 0.08)",
        "cm-glow": "rgba(207, 163, 90, 0.15)",
      },
      fontFamily: {
        display: ["Space Grotesk", "system-ui", "sans-serif"],
        accent: ["Space Grotesk", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        // Unified Typography Scale
        "display-massive": [
          "clamp(3rem, 10vw, 9rem)",
          { lineHeight: "0.85", letterSpacing: "-0.04em" },
        ],
        "display-hero": [
          "clamp(2.5rem, 6vw, 5.5rem)",
          { lineHeight: "0.9", letterSpacing: "-0.03em" },
        ],
        "display-section": [
          "clamp(2rem, 4vw, 4rem)",
          { lineHeight: "0.95", letterSpacing: "-0.02em" },
        ],
        "heading-lg": [
          "clamp(1.5rem, 3vw, 2.5rem)",
          { lineHeight: "1.1", letterSpacing: "-0.01em" },
        ],
        "heading-base": [
          "clamp(1.125rem, 2vw, 1.5rem)",
          { lineHeight: "1.2", letterSpacing: "-0.01em" },
        ],
        "body-premium": [
          "clamp(1rem, 1.2vw, 1.125rem)",
          { lineHeight: "1.8", letterSpacing: "0.01em" },
        ],
        "body-base": ["1rem", { lineHeight: "1.7", letterSpacing: "0" }],
      },
      animation: {
        "fade-in-up": "fadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "reveal-image":
          "revealImage 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "float-subtle": "floatSubtle 8s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "float-wave": "floatWave 12s ease-in-out infinite",
        sway: "sway 10s ease-in-out infinite",
        drift: "drift 40s linear infinite alternate",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        revealImage: {
          "0%": { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" },
          "100%": { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" },
        },
        floatSubtle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
        floatWave: {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "25%": { transform: "translate(10px, -15px) rotate(1deg)" },
          "50%": { transform: "translate(0px, -25px) rotate(0deg)" },
          "75%": { transform: "translate(-10px, -15px) rotate(-1deg)" },
        },
        sway: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(15px)" },
        },
        drift: {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "100% 100%" },
        },
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
        expo: "cubic-bezier(0.19, 1, 0.22, 1)",
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      transitionDuration: {
        400: "400ms",
        800: "800ms",
      },
    },
  },
  plugins: [],
};
