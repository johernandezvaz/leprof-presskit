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
      bio: "I'm Le Prof, a DJ and emerging music producer specializing in House, Tech House, and Latin House. My journey has taken me from Chihuahua, Mexico, to Prague, Czech Republic, where I've had the opportunity to share my music with different audiences while supporting local talent and becoming part of new music communities.I'm focused on building a career through meaningful performances,collaborating with artists, and playing at events that allow me to grow while creating genuine connections on the dancefloor.Whether it's an intimate venue, a club, or a festival, my goal is always the same: deliver energetic sets, connect people through music, and keep evolving as an artist. ",
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
      bio: "Soy Le Prof, DJ y productor musical emergente especializado en House, Tech House y Latin House. Mi trayectoria me ha llevado desde Chihuahua, México, hasta Praga, República Checa, donde he tenido la oportunidad de compartir mi música con diferentes públicos, apoyando el talento local y formando parte de nuevas comunidades musicales. Me centro en construir una carrera a través de actuaciones significativas, colaborando con artistas y pinchando en eventos que me permitan crecer y crear conexiones auténticas en la pista de baile. Ya sea en un local íntimo, un club o un festival, mi objetivo siempre es el mismo: ofrecer sets llenos de energía, conectar a la gente a través de la música y seguir evolucionando como artista.",
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
