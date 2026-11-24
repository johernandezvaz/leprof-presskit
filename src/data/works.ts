export type WorkType = 'Release' | 'Unofficial Remix' | 'Mix';

export interface Work {
  title: string;
  year: string;
  type: WorkType;
  label: string;
  link: string;
}

export const works: Work[] = [
  {
    title: "Sunday on Fire & Le Prof - See The Light",
    year: "2026",
    type: "Release",
    label: "Spotify",
    link: "https://open.spotify.com/intl-es/track/3zWLhiEnUb6TADott9lZI5?si=af087c7e70494a6d",
  },
  {
    title: "TOAN GASVEN & Le Prof - Ven Acercate",
    year: "2026",
    type: "Release",
    label: "Spotify",
    link: "https://open.spotify.com/intl-es/track/0vYX4BfyCRbx2vDGw28anA?si=d6d2958094504bc3",
  },
  {
    title: "Le Prof - Gozate (Radio Edit)",
    year: "2025",
    type: "Release",
    label: "Spotify",
    link: "https://open.spotify.com/intl-es/track/0oNwt56Jbrgztpp7Cv28VI?si=d82ed89d74544a39",
  },
  {
    title: "Humbe & Reik - Malbec (Le Prof Remix)",
    year: "2025",
    type: "Unofficial Remix",
    label: "Audius",
    link: "https://audius.co/leprof.mx/malbec-humbe-reik-le-prof-edit",
  },
  {
    title: "Showcase Set (Tech House)",
    year: "2025",
    type: "Mix",
    label: "Mixcloud",
    link: "https://www.mixcloud.com/LeProfMx/dystopia-set-tech-house-le-prof/",
  },
];
