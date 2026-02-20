export type Language = 'en' | 'es';

export const translations = {
  en: {
    nav: {
      presskit: 'Presskit',
      works: 'Works',
      venues: 'Venues',
      gallery: 'Gallery',
      contact: 'Contact',
    },
    hero: {
      role: 'Music Producer / DJ',
      location: 'Chihuahua – Mexico',
    },
    about: {
      bio: "I'm Le Prof, a DJ and music producer specializing in house, tech house, and Latin house. I live in Chihuahua, where I've played at key events and was a special guest of DJ Xquizit at Lulu's, one of the most popular clubs. I've also brought my energy to private events, solidifying my local presence. Outside the DJ booth, I explore new sounds and musical trends. Let's connect and create unforgettable experiences together through music!",
      mission: "Creating sound experiences that foster authentic connection, merging creativity and technique to leave a lasting impression on every performance.",
    },
    works: {
      title: 'Selected Works',
      type: {
        release: 'Release',
        unofficialRemix: 'Unofficial Remix',
        mix: 'Mix',
      },
    },
    venues: {
      title: 'Performed At',
    },
    gallery: {
      title: 'Gallery',
      altPerformance: 'Performance',
    },
    contact: {
      title: 'Bookings / Collaborations',
      sendInquiry: 'Send Inquiry',
      emailSubject: 'Booking Inquiry',
      emailBody: `Hello,

I would like to discuss a potential collaboration or booking.`,
      footer: 'All rights reserved',
    },
  },
  es: {
    nav: {
      presskit: 'Presskit',
      works: 'Trabajos',
      venues: 'Presentaciones',
      gallery: 'Galería',
      contact: 'Contacto',
    },
    hero: {
      role: 'Productor Musical / DJ',
      location: 'Chihuahua – México',
    },
    about: {
      bio: "Soy Le Prof, DJ y productor musical especializado en house, tech house y Latin house. Vivo en Chihuahua, donde he tocado en eventos clave y fui invitado especial de DJ Xquizit en Lulu's, uno de los clubes más populares. También he llevado mi energía a eventos privados, consolidando mi presencia local. Fuera de la cabina, exploro nuevos sonidos y tendencias musicales. ¡Conectemos y creemos experiencias inolvidables juntos a través de la música!",
      mission: "Creando experiencias sonoras que fomentan la conexión auténtica, fusionando creatividad y técnica para dejar una impresión duradera en cada presentación.",
    },
    works: {
      title: 'Trabajos Seleccionados',
      type: {
        release: 'Lanzamiento',
        unofficialRemix: 'Remix No Oficial',
        mix: 'Mezcla',
      },
    },
    venues: {
      title: 'Presentaciones En',
    },
    gallery: {
      title: 'Galería',
      altPerformance: 'Presentación',
    },
    contact: {
      title: 'Contrataciones / Colaboraciones',
      sendInquiry: 'Enviar Consulta',
      emailSubject: 'Consulta de Contratación',
      emailBody: `Hola,

Me gustaría discutir una posible colaboración o contratación.`,
      footer: 'Todos los derechos reservados',
    },
  },
};

export function getTranslations(lang: Language) {
  return translations[lang];
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

export function setLanguage(lang: Language) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('language', lang);
    window.dispatchEvent(new CustomEvent('languagechange', { detail: { language: lang } }));
  }
}
