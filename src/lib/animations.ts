/**
 * CIEN MARES - Animation Utilities
 * Centralized GSAP animations with automatic cleanup
 */

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Ensure GSAP plugins are registered
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ═══════════════════════════════════════════════════════════════
// SCROLL TRIGGER CLEANUP
// ═══════════════════════════════════════════════════════════════

/**
 * Kill all ScrollTrigger instances
 * Use this in cleanup functions when navigating away
 */
export function cleanupScrollTriggers(): void {
  if (typeof window !== "undefined") {
    ScrollTrigger.getAll().forEach((st) => st.kill());
  }
}

/**
 * Kill ScrollTrigger instances for specific elements
 */
export function cleanupElementTriggers(element: string | Element): void {
  if (typeof window !== "undefined") {
    const triggers = ScrollTrigger.getAll().filter((st) => {
      const trigger = st.vars.trigger;
      if (typeof trigger === "string") {
        return element === trigger;
      }
      return element === trigger;
    });
    triggers.forEach((st) => st.kill());
  }
}

// ═══════════════════════════════════════════════════════════════
// FADE ANIMATIONS
// ═══════════════════════════════════════════════════════════════

interface FadeOptions {
  y?: number;
  x?: number;
  duration?: number;
  delay?: number;
  ease?: string;
  start?: string;
  stagger?: number;
  markers?: boolean;
}

/**
 * Fade in element moving up
 */
export function fadeInUp(
  target: string | Element | Element[],
  trigger: string | Element,
  options: FadeOptions = {}
): gsap.core.Tween | null {
  if (typeof window === "undefined") return null;

  const {
    y = 50,
    duration = 1,
    delay = 0,
    ease = "power3.out",
    start = "top 80%",
  } = options;

  return gsap.fromTo(
    target,
    { y, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration,
      delay,
      ease,
      scrollTrigger: {
        trigger,
        start,
        toggleActions: "play none none none",
      },
    }
  );
}

/**
 * Fade in element moving down
 */
export function fadeInDown(
  target: string | Element | Element[],
  trigger: string | Element,
  options: FadeOptions = {}
): gsap.core.Tween | null {
  if (typeof window === "undefined") return null;

  const {
    y = -50,
    duration = 1,
    delay = 0,
    ease = "power3.out",
    start = "top 80%",
  } = options;

  return gsap.fromTo(
    target,
    { y, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration,
      delay,
      ease,
      scrollTrigger: {
        trigger,
        start,
        toggleActions: "play none none none",
      },
    }
  );
}

/**
 * Fade in element from left
 */
export function fadeInLeft(
  target: string | Element | Element[],
  trigger: string | Element,
  options: FadeOptions = {}
): gsap.core.Tween | null {
  if (typeof window === "undefined") return null;

  const {
    x = -60,
    duration = 1,
    delay = 0,
    ease = "power3.out",
    start = "top 80%",
  } = options;

  return gsap.fromTo(
    target,
    { x, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration,
      delay,
      ease,
      scrollTrigger: {
        trigger,
        start,
        toggleActions: "play none none none",
      },
    }
  );
}

/**
 * Fade in element from right
 */
export function fadeInRight(
  target: string | Element | Element[],
  trigger: string | Element,
  options: FadeOptions = {}
): gsap.core.Tween | null {
  if (typeof window === "undefined") return null;

  const {
    x = 60,
    duration = 1,
    delay = 0,
    ease = "power3.out",
    start = "top 80%",
  } = options;

  return gsap.fromTo(
    target,
    { x, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration,
      delay,
      ease,
      scrollTrigger: {
        trigger,
        start,
        toggleActions: "play none none none",
      },
    }
  );
}

/**
 * Scale in animation
 */
export function scaleIn(
  target: string | Element | Element[],
  trigger: string | Element,
  options: FadeOptions = {}
): gsap.core.Tween | null {
  if (typeof window === "undefined") return null;

  const {
    duration = 0.8,
    delay = 0,
    ease = "power3.out",
    start = "top 80%",
  } = options;

  return gsap.fromTo(
    target,
    { scale: 0.9, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration,
      delay,
      ease,
      scrollTrigger: {
        trigger,
        start,
        toggleActions: "play none none none",
      },
    }
  );
}

// ═══════════════════════════════════════════════════════════════
// STAGGER ANIMATIONS
// ═══════════════════════════════════════════════════════════════

/**
 * Staggered fade in for children
 */
export function staggerFadeIn(
  parent: string | Element,
  children: string,
  options: FadeOptions = {}
): gsap.core.Tween | null {
  if (typeof window === "undefined") return null;

  const {
    y = 40,
    duration = 0.8,
    delay = 0,
    ease = "power3.out",
    start = "top 80%",
    stagger = 0.1,
  } = options;

  return gsap.fromTo(
    children,
    { y, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration,
      delay,
      ease,
      stagger,
      scrollTrigger: {
        trigger: parent,
        start,
        toggleActions: "play none none none",
      },
    }
  );
}

/**
 * Staggered scale in for cards/grid items
 */
export function staggerScaleIn(
  parent: string | Element,
  children: string,
  options: FadeOptions = {}
): gsap.core.Tween | null {
  if (typeof window === "undefined") return null;

  const {
    duration = 0.6,
    delay = 0,
    ease = "power3.out",
    start = "top 80%",
    stagger = 0.1,
  } = options;

  return gsap.fromTo(
    children,
    { scale: 0.9, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration,
      delay,
      ease,
      stagger,
      scrollTrigger: {
        trigger: parent,
        start,
        toggleActions: "play none none none",
      },
    }
  );
}

// ═══════════════════════════════════════════════════════════════
// REVEAL ANIMATIONS
// ═══════════════════════════════════════════════════════════════

/**
 * Clip path reveal for images
 */
export function revealImage(
  target: string | Element | Element[],
  trigger: string | Element,
  options: Omit<FadeOptions, "y" | "x"> = {}
): gsap.core.Tween | null {
  if (typeof window === "undefined") return null;

  const {
    duration = 1.2,
    delay = 0,
    ease = "power3.inOut",
    start = "top 80%",
  } = options;

  return gsap.fromTo(
    target,
    { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" },
    {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      duration,
      delay,
      ease,
      scrollTrigger: {
        trigger,
        start,
        toggleActions: "play none none none",
      },
    }
  );
}

/**
 * Text reveal line by line
 */
export function revealTextLines(
  lines: string | Element | Element[],
  trigger: string | Element,
  options: FadeOptions = {}
): gsap.core.Tween | null {
  if (typeof window === "undefined") return null;

  const {
    y = 30,
    duration = 0.8,
    delay = 0,
    ease = "power3.out",
    start = "top 80%",
    stagger = 0.1,
  } = options;

  return gsap.fromTo(
    lines,
    { y, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration,
      delay,
      ease,
      stagger,
      scrollTrigger: {
        trigger,
        start,
        toggleActions: "play none none none",
      },
    }
  );
}

// ═══════════════════════════════════════════════════════════════
// PARALLAX ANIMATIONS
// ═══════════════════════════════════════════════════════════════

interface ParallaxOptions {
  yPercent?: number;
  scale?: number;
  ease?: string;
  scrub?: boolean | number;
}

/**
 * Parallax vertical movement
 */
export function parallaxY(
  target: string | Element | Element[],
  trigger: string | Element,
  options: ParallaxOptions = {}
): ScrollTrigger | null {
  if (typeof window === "undefined") return null;

  const { yPercent = 20, scrub = true } = options;

  return ScrollTrigger.create({
    trigger,
    start: "top bottom",
    end: "bottom top",
    scrub,
    animation: gsap.to(target, { yPercent }),
  });
}

/**
 * Parallax scale effect
 */
export function parallaxScale(
  target: string | Element | Element[],
  trigger: string | Element,
  options: ParallaxOptions = {}
): ScrollTrigger | null {
  if (typeof window === "undefined") return null;

  const { scale = 1.1, scrub = true } = options;

  return ScrollTrigger.create({
    trigger,
    start: "top bottom",
    end: "bottom top",
    scrub,
    animation: gsap.to(target, { scale }),
  });
}

// ═══════════════════════════════════════════════════════════════
// PINNED SECTIONS
// ═══════════════════════════════════════════════════════════════

interface PinOptions {
  pin?: boolean;
  scrub?: boolean | number;
  markers?: boolean;
  start?: string;
  end?: string;
}

/**
 * Create a pinned scroll section
 */
export function pinSection(
  trigger: string | Element,
  animation: gsap.core.Timeline,
  options: PinOptions = {}
): ScrollTrigger | null {
  if (typeof window === "undefined") return null;

  const { scrub = true, start = "top top", end = "+=100%" } = options;

  return ScrollTrigger.create({
    trigger,
    start,
    end,
    pin: true,
    scrub,
    animation,
  });
}

// ═══════════════════════════════════════════════════════════════
// TIMELINE HELPERS
// ═══════════════════════════════════════════════════════════════

/**
 * Create a timeline with default settings
 */
export function createTimeline(
  defaults: gsap.TweenVars = {}
): gsap.core.Timeline {
  return gsap.timeline({
    defaults: {
      ease: "power3.out",
      duration: 0.8,
      ...defaults,
    },
  });
}

// ═══════════════════════════════════════════════════════════════
// INTERSECTION OBSERVER HELPER (CSS fallback)
// ═══════════════════════════════════════════════════════════════

/**
 * Initialize reveal animations using IntersectionObserver
 * Used as fallback or for simpler animations
 */
export function initRevealAnimations(): void {
  if (typeof window === "undefined") return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -10% 0px",
    }
  );

  document.querySelectorAll("[data-reveal]").forEach((el) => {
    observer.observe(el);
  });
}

// ═══════════════════════════════════════════════════════════════
// PREFERS REDUCED MOTION
// ═══════════════════════════════════════════════════════════════

/**
 * Check if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Disable all animations if user prefers reduced motion
 */
export function respectReducedMotion(): void {
  if (prefersReducedMotion()) {
    gsap.globalTimeline.timeScale(0);
  }
}
