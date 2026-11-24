/** @type {import('tailwindcss').Config} */
// Tokens de DESIGN.md v2 (§2.1, §3, §8.1). Usar siempre por nombre.
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#0e0e11', // canvas
          lifted: '#141418', // secciones y cards
          raised: '#1b1b21', // hover de card, popovers
        },
        'off-white': {
          DEFAULT: '#e8e8e8', // texto principal
          soft: '#a7a7a7', // texto secundario
          muted: '#868688', // metadatos, eyebrows, footer
          ghost: '#1a1a1e', // SOLO marca de agua
        },
        accent: {
          DEFAULT: '#C6A75E',
          light: '#D6BC7E',
          deep: '#A68A47',
        },
        line: {
          DEFAULT: 'rgba(232,232,232,0.08)',
          strong: 'rgba(232,232,232,0.16)',
        },
      },
      opacity: {
        12: '0.12', // accent/12 (wash dorado)
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Inter Tight"', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(4.5rem, 13vw, 11.5rem)', { lineHeight: '0.86', letterSpacing: '-0.05em', fontWeight: '600' }],
        'display-l': ['clamp(2.5rem, 5.5vw, 4.75rem)', { lineHeight: '1', letterSpacing: '-0.035em', fontWeight: '500' }],
        'display-m': ['clamp(1.625rem, 3vw, 2.75rem)', { lineHeight: '1.25', letterSpacing: '-0.02em', fontWeight: '300' }],
        title: ['clamp(1.375rem, 2.2vw, 1.875rem)', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '500' }],
        'body-l': ['1.125rem', { lineHeight: '1.65', letterSpacing: '0', fontWeight: '400' }],
        body: ['1rem', { lineHeight: '1.6', letterSpacing: '0', fontWeight: '400' }],
        ui: ['0.9375rem', { lineHeight: '1', letterSpacing: '-0.01em', fontWeight: '500' }],
        meta: ['0.875rem', { lineHeight: '1.5', letterSpacing: '0', fontWeight: '400' }],
        eyebrow: ['0.75rem', { lineHeight: '1', letterSpacing: '0.2em', fontWeight: '500' }],
        watermark: ['clamp(8rem, 24vw, 22rem)', { lineHeight: '0.8', letterSpacing: '-0.06em', fontWeight: '700' }],
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
