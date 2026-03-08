/**
 * Utility Functions - Shared helper functions
 */

/**
 * Format phone number for display
 */
export function formatPhone(phone: string): string {
  return phone.replace(/(\+34)\s?(\d{3})\s?(\d{2})\s?(\d{2})\s?(\d{2})/, '$1 $2 $3 $4 $5');
}

/**
 * Create WhatsApp link with optional message
 */
export function createWhatsAppLink(phone: string, message?: string): string {
  const baseUrl = `https://wa.me/${phone.replace(/\D/g, '')}`;
  if (message) {
    return `${baseUrl}?text=${encodeURIComponent(message)}`;
  }
  return baseUrl;
}

/**
 * Create mailto link with subject and body
 */
export function createMailtoLink(email: string, subject?: string, body?: string): string {
  const params = new URLSearchParams();
  if (subject) params.set('subject', subject);
  if (body) params.set('body', body);
  const query = params.toString();
  return `mailto:${email}${query ? `?${query}` : ''}`;
}

/**
 * Truncate text to specified length
 */
export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length).trim() + '...';
}

/**
 * Generate srcset for responsive images
 */
export function generateSrcset(src: string, widths: number[]): string {
  return widths
    .map(width => {
      const url = new URL(src);
      url.searchParams.set('w', width.toString());
      return `${url.toString()} ${width}w`;
    })
    .join(', ');
}

/**
 * Get image URL with Unsplash parameters
 */
export function getUnsplashUrl(photoId: string, width?: number, height?: number): string {
  const params = new URLSearchParams();
  params.set('q', '85');
  params.set('auto', 'format');
  params.set('fit', 'crop');
  if (width) params.set('w', width.toString());
  if (height) params.set('h', height.toString());
  
  return `https://images.unsplash.com/${photoId}?${params.toString()}`;
}

/**
 * Debounce function
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Throttle function
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Check if element is in viewport
 */
export function isInViewport(element: Element, offset: number = 0): boolean {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= -offset &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + offset &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/**
 * Add loaded class to image when loaded
 */
export function preloadImage(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
}
