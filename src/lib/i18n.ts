export type Language = 'en' | 'es';

export const translations = {
  en: {
    skip: 'Skip to content',
    nav: {
      presskit: 'Presskit',
      home: 'Home',
      about: 'About',
      works: 'Works',
      venues: 'Venues',
      gallery: 'Gallery',
      contact: 'Contact',
      booking: 'Booking',
      primary: 'Main navigation',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      language: 'Language',
    },
    hero: {
      role: 'Music Producer / DJ',
      location: 'Chihuahua – Mexico',
      tagline: 'House, Tech House & Latin House',
      booking: 'Booking',
      listen: 'Listen',
      listenAria: 'Listen to selected works',
      portraitAlt: 'Portrait of Le Prof',
      watermark: 'LE PROF',
      stats: {
        works: 'Works',
        venues: 'Venues',
        shows: 'Shows',
      },
    },
    about: {
      eyebrow: 'Statement',
      title: 'About me',
      bio: "I'm Le Prof, a DJ and emerging music producer specializing in House, Tech House, and Latin House. My journey has taken me from Chihuahua, Mexico, to Prague, Czech Republic, where I've had the opportunity to share my music with different audiences while supporting local talent and becoming part of new music communities. I'm focused on building a career through meaningful performances, collaborating with artists, and playing at events that allow me to grow while creating genuine connections on the dancefloor. Whether it's an intimate venue, a club, or a festival, my goal is always the same: deliver energetic sets, connect people through music, and keep evolving as an artist.",
      mission: "Creating sound experiences that foster authentic connection, merging creativity and technique to leave a lasting impression on every performance.",
      portraitAlt: 'Le Prof performing',
      contactAria: 'Go to bookings',
    },
    works: {
      eyebrow: 'Selected Works',
      title: 'Releases, remixes and mixes',
      type: {
        release: 'Release',
        unofficialRemix: 'Unofficial Remix',
        mix: 'Mix',
      },
      opensNewTab: 'opens in a new tab',
    },
    venues: {
      eyebrow: 'Performed At',
      title: 'Venues',
      openFlyer: 'Open flyer',
      dialog: 'Event flyer',
      close: 'Close',
    },
    gallery: {
      eyebrow: 'Gallery',
      title: 'On stage',
      altPerformance: 'Performance',
    },
    contact: {
      eyebrow: 'Bookings / Collaborations',
      title: "Let's make it happen",
      sendInquiry: 'Send inquiry',
      copyEmail: 'Copy email',
      copied: 'Copied',
      watermark: 'BOOKING',
      emailSubject: 'Booking Inquiry',
      emailBody: `Hello,

I would like to discuss a potential collaboration or booking.`,
      footer: 'All rights reserved',
    },
    footer: {
      backToTop: 'Back to top',
    },
  },
  es: {
    skip: 'Saltar al contenido',
    nav: {
      presskit: 'Presskit',
      home: 'Inicio',
      about: 'Sobre mí',
      works: 'Trabajos',
      venues: 'Presentaciones',
      gallery: 'Galería',
      contact: 'Contacto',
      booking: 'Booking',
      primary: 'Navegación principal',
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
      language: 'Idioma',
    },
    hero: {
      role: 'Productor Musical / DJ',
      location: 'Chihuahua – México',
      tagline: 'House, Tech House y Latin House',
      booking: 'Booking',
      listen: 'Escuchar',
      listenAria: 'Escuchar trabajos seleccionados',
      portraitAlt: 'Retrato de Le Prof',
      watermark: 'LE PROF',
      stats: {
        works: 'Trabajos',
        venues: 'Lugares',
        shows: 'Shows',
      },
    },
    about: {
      eyebrow: 'Statement',
      title: 'Sobre mí',
      bio: "Soy Le Prof, DJ y productor musical emergente especializado en House, Tech House y Latin House. Mi trayectoria me ha llevado desde Chihuahua, México, hasta Praga, República Checa, donde he tenido la oportunidad de compartir mi música con diferentes públicos, apoyando el talento local y formando parte de nuevas comunidades musicales. Me centro en construir una carrera a través de actuaciones significativas, colaborando con artistas y pinchando en eventos que me permitan crecer y crear conexiones auténticas en la pista de baile. Ya sea en un local íntimo, un club o un festival, mi objetivo siempre es el mismo: ofrecer sets llenos de energía, conectar a la gente a través de la música y seguir evolucionando como artista.",
      mission: "Creando experiencias sonoras que fomentan la conexión auténtica, fusionando creatividad y técnica para dejar una impresión duradera en cada presentación.",
      portraitAlt: 'Le Prof en cabina',
      contactAria: 'Ir a contrataciones',
    },
    works: {
      eyebrow: 'Trabajos Seleccionados',
      title: 'Lanzamientos, remixes y mezclas',
      type: {
        release: 'Lanzamiento',
        unofficialRemix: 'Remix No Oficial',
        mix: 'Mezcla',
      },
      opensNewTab: 'se abre en una pestaña nueva',
    },
    venues: {
      eyebrow: 'Presentaciones En',
      title: 'Escenarios',
      openFlyer: 'Abrir flyer',
      dialog: 'Flyer del evento',
      close: 'Cerrar',
    },
    gallery: {
      eyebrow: 'Galería',
      title: 'En cabina',
      altPerformance: 'Presentación',
    },
    contact: {
      eyebrow: 'Contrataciones / Colaboraciones',
      title: 'Hagámoslo realidad',
      sendInquiry: 'Enviar consulta',
      copyEmail: 'Copiar email',
      copied: 'Copiado',
      watermark: 'BOOKING',
      emailSubject: 'Consulta de Contratación',
      emailBody: `Hola,

Me gustaría discutir una posible colaboración o contratación.`,
      footer: 'Todos los derechos reservados',
    },
    footer: {
      backToTop: 'Volver arriba',
    },
  },
};

export type Translations = (typeof translations)['en'];

export function getTranslations(lang: Language) {
  return translations[lang];
}

/** Lee una clave con puntos ("works.type.mix") del diccionario del idioma. */
export function t(lang: Language, key: string): string {
  const value = key
    .split('.')
    .reduce<unknown>((node, part) => (node && typeof node === 'object' ? (node as Record<string, unknown>)[part] : undefined), translations[lang]);
  return typeof value === 'string' ? value : key;
}

/** Separa la primera frase del resto (statement de About, §7.6). */
export function splitLead(text: string): [string, string] {
  const match = text.match(/^(.+?[.!?])\s+(.*)$/s);
  return match ? [match[1], match[2]] : [text, ''];
}

export function getInitialLanguage(): Language {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('language');
    if (stored === 'en' || stored === 'es') {
      return stored;
    }
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('es')) {
      return 'es';
    }
  }
  return 'en';
}

let currentLanguage: Language | null = null;

export function getCurrentLanguage(): Language {
  return currentLanguage ?? getInitialLanguage();
}

/**
 * Aplica el idioma al documento:
 * - [data-key]       → textContent
 * - [data-key-aria]  → aria-label
 * - [data-key-alt]   → alt
 * - [data-key-lead]  → primera frase en [data-lead], resto en [data-rest]
 * - <html lang>
 */
export function applyTranslations(lang: Language) {
  currentLanguage = lang;
  document.documentElement.lang = lang;

  document.querySelectorAll<HTMLElement>('[data-key]').forEach((el) => {
    el.textContent = t(lang, el.dataset.key!);
  });
  document.querySelectorAll<HTMLElement>('[data-key-aria]').forEach((el) => {
    el.setAttribute('aria-label', t(lang, el.dataset.keyAria!));
  });
  document.querySelectorAll<HTMLImageElement>('[data-key-alt]').forEach((el) => {
    el.alt = t(lang, el.dataset.keyAlt!);
  });
  document.querySelectorAll<HTMLElement>('[data-key-lead]').forEach((el) => {
    const [lead, rest] = splitLead(t(lang, el.dataset.keyLead!));
    const leadEl = el.querySelector('[data-lead]');
    const restEl = el.querySelector('[data-rest]');
    if (leadEl) leadEl.textContent = lead;
    if (restEl) restEl.textContent = rest ? ` ${rest}` : '';
  });
}

export function setLanguage(lang: Language) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('language', lang);
    applyTranslations(lang);
    window.dispatchEvent(new CustomEvent('languagechange', { detail: { language: lang } }));
  }
}
