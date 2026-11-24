export interface Appearance {
  date: string; // YYYY-MM
  flyer: string;
}

export interface Venue {
  venue: string;
  city: string;
  country: string;
  appearances: Appearance[];
}

export const venues: Venue[] = [
  { venue: "The Caffeine Rave", city: "Prague", country: "Czech Republic",
    appearances: [{ date: "2026-02", flyer: "https://res.cloudinary.com/dflhguvio/image/upload/v1770924237/WhatsApp_Image_2026-02-12_at_1.19.30_PM_hqno5p.jpg" }] },
  { venue: "El Camino Mezcaleria", city: "Chihuahua", country: "Mexico",
    appearances: [
      { date: "2026-04", flyer: "https://res.cloudinary.com/dflhguvio/image/upload/v1783534535/agora_beats_flyer_1_fhtt4n.jpg" },
      { date: "2026-04", flyer: "https://res.cloudinary.com/dflhguvio/image/upload/v1783534535/electro_jugueton_flyer_ibgqnw.jpg" },
      { date: "2026-05", flyer: "https://res.cloudinary.com/dflhguvio/image/upload/v1783534536/agora_beats_flyer_2_emrwc6.jpg" },
      { date: "2026-07", flyer: "https://res.cloudinary.com/dflhguvio/image/upload/v1783534535/electro_room_flyer_bxsbrz.jpg" },
      { date: "2026-07", flyer: "https://res.cloudinary.com/dflhguvio/image/upload/v1770924645/WhatsApp_Image_2026-02-12_at_1.29.51_PM_bdx4tk.jpg" }
    ] },
  { venue: "Epicentro Foro", city: "Chihuahua", country: "Mexico",
    appearances: [{ date: "2026-07", flyer: "https://res.cloudinary.com/dflhguvio/image/upload/v1783534534/epicentro_foro_flyer_vorook.jpg" }] },
  { venue: "La Cerve", city: "Chihuahua", country: "Mexico",
    appearances: [{ date: "2026-06", flyer: "https://res.cloudinary.com/dflhguvio/image/upload/v1783534536/la_cerve_flyer_wgo8jo.jpg" }] },
  { venue: "Studio Bar", city: "Chihuahua", country: "Mexico",
    appearances: [
      { date: "2025-05", flyer: "https://res.cloudinary.com/dflhguvio/image/upload/v1770924380/WhatsApp_Image_2026-02-12_at_1.26.02_PM_plveyh.jpg" },
      { date: "2025-09", flyer: "https://res.cloudinary.com/dflhguvio/image/upload/v1770924537/WhatsApp_Image_2026-02-12_at_1.28.38_PM_guu2d8.jpg" }
    ] },
  { venue: "Ambar", city: "Chihuahua", country: "Mexico",
    appearances: [{ date: "2025-06", flyer: "https://res.cloudinary.com/dflhguvio/image/upload/v1770924474/WhatsApp_Image_2026-02-12_at_1.27.33_PM_sznsub.jpg" }] }
];
