# DESIGN.md — Le Prof Presskit (v2)

Sistema de diseño **objetivo** del presskit. Sustituye al DESIGN.md anterior, que solo describía lo que había.
Se conservan los tres colores de marca (`#0e0e11`, `#e8e8e8`, `#C6A75E`) y el stack (Astro 5 + Tailwind 3). Lo que cambia es la forma de usarlos: ahora hay jerarquía de superficies, una escala tipográfica display, formas con intención, motivos propios y movimiento cuidado.

> Regla de lectura para agentes: si algo no está en este documento, no se inventa. Cada token tiene un nombre; úsalo por nombre, nunca con valores sueltos.

---

## 1. Concepto

**"Club de madrugada, revista impresa."** El presskit debe sentirse como la edición de una revista de música electrónica impresa sobre papel negro: tipografía enorme y apretada, mucho aire, oro solo donde hay una decisión, y algunos guiños al vinilo (círculos, surcos, rotación lenta).

Tres gestos definen la identidad. Si falta alguno, el sitio vuelve a verse "plantilla":

1. **Tipografía display gigante y apretada.** Los titulares son Inter Tight con tracking negativo fuerte y ocupan el ancho. El contraste viene de la escala, no de colores nuevos.
2. **Surcos de vinilo.** Anillos concéntricos dorados de 1px, a baja opacidad, alrededor de un retrato circular, con un botón "satélite" dorado acoplado a su borde. Es el motivo de marca y solo aparece en Hero y About.
3. **Oro como señal, no como decoración.** El dorado marca la acción principal, el estado activo, el punto de los eyebrows y los surcos. Nunca va en párrafos ni en fondos grandes.

**Características clave**
- Lienzo negro cálido-frío `#0e0e11` con grano sutil, nunca negro puro.
- Tres niveles de superficie (canvas → lifted → raised) en lugar de un solo plano.
- Navegación en píldora flotante con vidrio esmerilado, separada del borde superior.
- Eyebrows con punto dorado, numeración de sección (`01 / 05`) y título display debajo.
- Marca de agua "fantasma" (texto gigante casi invisible) detrás del hero y del contacto.
- Escala de radios corta y comprometida: recto, 16, 24, 40, píldora, círculo. Sin 6–12px.
- Botón primario sólido en oro con forma de píldora: por fin hay un CTA claro.

---

## 2. Color

### 2.1 Tokens (`tailwind.config.cjs`)

```js
colors: {
  dark: {
    DEFAULT: '#0e0e11', // canvas: fondo de página
    lifted:  '#141418', // secciones y cards apoyadas sobre el canvas
    raised:  '#1b1b21', // elementos elevados dentro de lifted (hover de card, popovers)
  },
  'off-white': {
    DEFAULT: '#e8e8e8', // texto principal y titulares
    soft:    '#a7a7a7', // texto secundario y párrafos largos
    muted:   '#868688', // metadatos, eyebrows y footer (mínimo permitido para texto)
    ghost:   '#1a1a1e', // SOLO marca de agua decorativa; nunca texto legible
  },
  accent: {
    DEFAULT: '#C6A75E', // oro: CTA primario, activo, punto eyebrow, surcos
    light:   '#D6BC7E', // hover del CTA dorado
    deep:    '#A68A47', // pressed del CTA dorado
  },
  line: {
    DEFAULT: 'rgba(232,232,232,0.08)', // bordes y separadores
    strong:  'rgba(232,232,232,0.16)', // bordes de botones secundarios y chips
  },
}
```

Valores RGBA que se usan sin token propio. No hace falta crear un token para cada uno:
- `accent/12`: "wash" dorado para el fondo de chips activos y de filas en hover.
- `accent/25` a `accent/40`: surcos de vinilo y halo del hero.
- `dark/70`: fondo de la nav y de vidrios esmerilados (siempre con `backdrop-blur-xl`).
- `dark/90`: fondo del lightbox.

### 2.2 Roles

| Rol | Token |
|---|---|
| Fondo de página | `bg-dark` |
| Sección destacada (Contact, Events) | `bg-dark-lifted` |
| Card / panel | `bg-dark-lifted` + `border border-line` |
| Card en hover / popover | `bg-dark-raised` |
| Titular y texto principal | `text-off-white` |
| Párrafo secundario | `text-off-white-soft` |
| Metadatos, eyebrow, footer | `text-off-white-muted` |
| Acción primaria / activo | `bg-accent text-dark` |
| Enlace en hover | `text-accent` |
| Separador | `border-line` |
| Borde de control | `border-line-strong` |

### 2.3 Reglas

- El **ritmo de página** alterna superficies: `dark` → `dark-lifted` → `dark`. Esa alternancia sustituye a los separadores de 1px como forma principal de dividir secciones.
- **No** se usan `black`, `white`, `gray-*` ni ningún color de Tailwind fuera de estos tokens. Los overlays usan `dark/xx`.
- **Sin estados semánticos** (éxito/error): el sitio no tiene formularios. Si algún día se agregan, este documento se amplía antes.
- **Solo modo oscuro.** `meta theme-color` y el manifest usan `#0e0e11`.

### 2.4 Contraste (WCAG AA, calculado)

| Texto | Sobre `dark` | Sobre `dark-lifted` | Sobre `dark-raised` |
|---|---|---|---|
| `off-white` | 15.7:1 | 14.9:1 | 13.9:1 |
| `off-white-soft` | 8.0:1 | 7.6:1 | 7.1:1 |
| `off-white-muted` | 5.3:1 | 5.0:1 | 4.7:1 |
| `accent` | 8.3:1 | 7.9:1 | 7.4:1 |
| `dark` sobre `accent` | 8.3:1 | — | — |

`off-white-muted` es el gris **más tenue permitido para texto**. Se eliminan `/40` y `/30`.

---

## 3. Tipografía

### 3.1 Familias

Es un solo sistema (Inter) en dos cortes ópticos:
- **Display:** `Inter Tight`, variable `wght 400..700`. Para titulares, números grandes y marca de agua.
- **Texto:** `Inter`, variable `wght 300..600`. Para cuerpo, UI y metadatos.

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300..600&family=Inter+Tight:wght@400..700&display=swap" rel="stylesheet">
```

```js
fontFamily: {
  sans:    ['Inter', 'system-ui', 'sans-serif'],
  display: ['"Inter Tight"', 'Inter', 'system-ui', 'sans-serif'],
},
```

La familia se declara **solo** en Tailwind. Se elimina el `body { font-family }` duplicado.

### 3.2 Escala

Los tamaños fluidos se definen como tokens en `theme.extend.fontSize`, con `[size, { lineHeight, letterSpacing, fontWeight }]`.

| Token | Familia | Tamaño | Peso | Interlineado | Tracking | Uso |
|---|---|---|---|---|---|---|
| `text-display-xl` | display | `clamp(4.5rem, 13vw, 11.5rem)` | 600 | 0.86 | -0.05em | Nombre del artista (h1). Una por página |
| `text-display-l` | display | `clamp(2.5rem, 5.5vw, 4.75rem)` | 500 | 1.0 | -0.035em | Título de sección (h2) |
| `text-display-m` | sans | `clamp(1.625rem, 3vw, 2.75rem)` | 300 | 1.25 | -0.02em | Statement/bio, email de contacto |
| `text-title` | display | `clamp(1.375rem, 2.2vw, 1.875rem)` | 500 | 1.15 | -0.02em | h3: track, venue, card |
| `text-body-l` | sans | 1.125rem (18px) | 400 | 1.65 | 0 | Párrafo introductorio |
| `text-body` | sans | 1rem (16px) | 400 | 1.6 | 0 | Párrafo |
| `text-ui` | sans | 0.9375rem (15px) | 500 | 1 | -0.01em | Nav, botones, chips grandes |
| `text-meta` | sans | 0.875rem (14px) | 400 | 1.5 | 0 | Año, ciudad, tipo. Siempre `tabular-nums` |
| `text-eyebrow` | sans | 0.75rem (12px) | 500 | 1 | 0.2em | Eyebrow y footer. **Única** escala en mayúsculas |
| `text-watermark` | display | `clamp(8rem, 24vw, 22rem)` | 700 | 0.8 | -0.06em | Marca de agua fantasma |

### 3.3 Principios

- **Las mayúsculas se reservan para `text-eyebrow`.** Nav, botones y CTAs pasan a sentence case con peso 500: se lee más editorial y menos plantilla. El texto fuente nunca va en mayúsculas; las pone `uppercase`.
- **Tracking negativo en todo lo display.** Cuanto más grande, más apretado.
- **El interlineado baja con el tamaño:** 0.86 en el h1, 1.0 en el h2 y 1.6 en el cuerpo.
- **Peso 300 solo en `display-m`.** Es el guiño al estilo light original: el statement se siente susurrado frente a titulares firmes.
- Los párrafos se limitan a `max-w-[60ch]`.
- Se usa `text-balance` en h1/h2/h3 y `text-pretty` en párrafos.

---

## 4. Espaciado y layout

### 4.1 Escala

Se mantiene la base de Tailwind (4px), pero solo se usan estos pasos: **2, 3, 4, 6, 8, 12, 16, 24, 32, 40** (8 → 160px).

| Uso | Clases |
|---|---|
| Padding vertical de sección | `py-24 md:py-32 lg:py-40` |
| Gutter horizontal | `px-6 md:px-10 lg:px-16` |
| Cabecera de sección → contenido | `mb-16 md:mb-24` |
| Eyebrow → título | `mb-6` |
| Padding interno de card | `p-6 md:p-8` |
| Gap de grid | `gap-6 md:gap-8` |

### 4.2 Contenedor único

**Todas** las secciones, la nav y el footer usan el mismo ancho, así los bordes izquierdos quedan alineados:

```html
<section id="…" class="relative py-24 md:py-32 lg:py-40 px-6 md:px-10 lg:px-16 scroll-mt-24">
  <div class="mx-auto max-w-6xl"> … </div>
</section>
```

`max-w-6xl` mide 1152px. La excepción permitida es una imagen que sangra a todo el ancho (`max-w-none`), y solo en Gallery. Se elimina el uso de `container`.

### 4.3 Grid

Grid editorial de 12 columnas (`grid grid-cols-12 gap-6 md:gap-8`) para composiciones asimétricas:
- Cabecera de sección: título en `col-span-12 lg:col-span-7` e intro en `col-span-12 lg:col-span-4 lg:col-start-9`, con la intro alineada abajo (`self-end`).
- Gallery: mosaico tipo bento con spans 7/5, 4/8 y 12.

### 4.4 Breakpoints

Los de Tailwind por defecto. Se usan `md` (768), `lg` (1024) y `xl` (1280). `xl` solo sirve para ajustes de hero y de la marca de agua.

### 4.5 Ritmo vertical de la página

| # | Sección | Superficie |
|---|---|---|
| — | Nav (flotante) | vidrio `dark/70` |
| 01 | Hero | `dark` + halo dorado + marca de agua |
| 02 | About / Statement | `dark` + retrato con surcos |
| 03 | Selected Works | `dark-lifted` |
| 04 | Events | `dark` |
| 05 | Gallery | `dark` |
| 06 | Contact | panel `dark-lifted` con radio 40 + marca de agua |
| — | Footer | `dark` |

La numeración `01 / 06` de los eyebrows sigue esta tabla. Si cambia el número de secciones, se recalcula.

---

## 5. Forma y profundidad

### 5.1 Escala de radios

| Token | Valor | Uso |
|---|---|---|
| `rounded-none` | 0 | Imágenes a sangre completa (solo Gallery full-bleed) |
| `rounded-2xl` | 16px | **Solo** media anidada dentro de una card de 24px (flyers en Events) |
| `rounded-3xl` | 24px | Cards, imágenes de galería, lightbox |
| `rounded-[40px]` | 40px | Marco del hero (estadio) y panel de Contact |
| `rounded-full` | 9999px | Nav, botones, chips, toggle de idioma |
| `rounded-full` + `aspect-square` | círculo | Retratos con surcos, botones de icono, satélite |

No se usan 4, 6, 8 ni 12px. Un radio "intermedio" es lo que hace que una UI se vea genérica.

### 5.2 Elevación

En fondo oscuro las sombras apenas se ven, así que la elevación se construye con **superficie + borde de luz + sombra profunda**:

| Nivel | Tratamiento | Uso |
|---|---|---|
| 0 | Nada | Canvas; el 90% de la página |
| 1 | `bg-dark-lifted border border-line` | Cards, secciones lifted |
| 2 | `bg-dark-raised border border-line-strong shadow-[0_24px_48px_-12px_rgba(0,0,0,0.6)]` | Card en hover, popovers |
| 3 | `bg-dark/70 backdrop-blur-xl border border-line shadow-[0_8px_32px_rgba(0,0,0,0.45)]` | Nav flotante, chips sobre imagen |
| Modal | `bg-dark/90 backdrop-blur-md` | Fondo del lightbox |

**Borde de luz superior** (opcional en niveles 1–2): `shadow-[inset_0_1px_0_rgba(232,232,232,0.06)]`. Simula luz que roza el canto.

### 5.3 Atmósfera

- **Grano:** una capa fija a pantalla completa con ruido SVG (`feTurbulence`) a `opacity: 0.035`, `pointer-events-none`, `z-[60]` y `mix-blend-mode: overlay`. Quita la sensación de "negro digital plano".
- **Halo del hero:** `radial-gradient(ellipse at 70% 40%, rgba(198,167,94,0.10), transparent 60%)` detrás del retrato. Es el **único** degradado del sistema.
- **z-index:** contenido `z-0`, marca de agua `-z-10` (dentro de un `relative isolate`), nav `z-40`, menú móvil `z-50`, lightbox `z-[70]`, grano `z-[60]`.

---

## 6. Motivos de marca

### 6.1 Surcos de vinilo

Es un SVG inline en un componente `src/components/ui/Grooves.astro`, formado por 4–6 círculos concéntricos:
- `stroke` = `accent`, `stroke-width` = 1 (`vector-effect="non-scaling-stroke"`), `fill="none"`.
- Opacidades de dentro hacia fuera: 0.40, 0.30, 0.22, 0.15, 0.10.
- Separación entre anillos: 6–8% del diámetro del retrato.
- Un anillo es **discontinuo** (`stroke-dasharray`) y gira 360° cada 40s (`animate-[spin_40s_linear_infinite]`), como un vinilo. Se detiene con `motion-reduce:animate-none`.
- Solo aparece en Hero y About. Nunca en cards, listas ni footer.

### 6.2 Retrato circular con satélite

- Retrato: imagen `aspect-square rounded-full object-cover`, de 280–420px en desktop y 220px en móvil, rodeada por los surcos.
- Satélite: botón circular `size-14 rounded-full bg-accent text-dark` acoplado abajo a la derecha, con ~35% de su diámetro fuera del círculo (`absolute bottom-[6%] right-[6%] translate-x-1/3 translate-y-1/3`). Lleva un icono de flecha o play de 20px. Hover: `bg-accent-light scale-105`. Lleva a la acción principal de la sección (escuchar o contactar).

### 6.3 Marca de agua fantasma

- Texto `font-display text-watermark text-off-white-ghost select-none pointer-events-none`, posicionado en absoluto y desbordando el borde del viewport (`-right-[5vw]`), con `aria-hidden="true"`.
- Hero: "LE PROF". Contact: "BOOKING" (traducible por i18n).
- Máximo dos por página.

### 6.4 Eyebrow con punto y numeración

```html
<div class="flex items-center justify-between mb-6">
  <p class="flex items-center gap-3 text-eyebrow uppercase text-off-white-muted">
    <span class="size-1.5 rounded-full bg-accent" aria-hidden="true"></span>
    <span data-key="worksEyebrow">Selected Works</span>
  </p>
  <span class="text-eyebrow text-off-white-muted tabular-nums" aria-hidden="true">03 / 06</span>
</div>
<h2 class="font-display text-display-l text-off-white text-balance">…</h2>
```

**El punto dorado no se omite nunca:** es la firma.

---

## 7. Componentes

Los patrones repetidos pasan a ser componentes en `src/components/ui/`: `Button.astro`, `IconButton.astro`, `Chip.astro`, `SectionHeader.astro`, `Grooves.astro` y `Watermark.astro`. Las secciones los consumen en lugar de repetir clases.

### 7.1 Botones

Todos comparten la base `inline-flex items-center justify-center gap-2 rounded-full font-sans text-ui transition-[background-color,color,border-color,transform] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-dark active:scale-[0.98] disabled:opacity-40 disabled:pointer-events-none`.

| Variante | Clases | Uso |
|---|---|---|
| **Primary (oro)** | `h-12 px-7 bg-accent text-dark hover:bg-accent-light active:bg-accent-deep` | Una acción principal por sección como máximo. Booking, enviar consulta |
| **Secondary (contorno)** | `h-12 px-7 border border-line-strong text-off-white hover:border-accent hover:text-accent` | Acción complementaria junto a la primaria |
| **Text + flecha** | `h-auto px-0 text-off-white-soft hover:text-accent` + flecha con `group-hover:translate-x-1` | Acciones terciarias dentro de texto |
| **Small** | `h-9 px-4` (con cualquiera de las anteriores) | CTA dentro de la nav |

**Botón de icono:** `size-12 rounded-full border border-line-strong text-off-white hover:bg-accent hover:text-dark hover:border-accent`, con icono de 20px y `aria-label` obligatorio. Tamaño mínimo de 44px en táctil.

### 7.2 Chip

`inline-flex items-center h-7 px-3 rounded-full border border-line-strong text-[12px] font-medium text-off-white-soft`.
La variante dorada usa `border-transparent bg-accent/12 text-accent`. Sirve para plataforma (Spotify, SoundCloud…), tipo (Release, Remix) y "Próximo".

### 7.3 Navegación flotante (`Navigation.astro`)

- Contenedor: `fixed top-4 inset-x-4 z-40`. Dentro va `mx-auto max-w-6xl h-14 rounded-full bg-dark/70 backdrop-blur-xl border border-line shadow-[0_8px_32px_rgba(0,0,0,0.45)] flex items-center justify-between pl-6 pr-2`.
- Izquierda: "Le Prof" en `font-display text-[17px] font-semibold tracking-tight`, que lleva a `#hero`.
- Centro (`hidden lg:flex gap-8`): enlaces `text-ui text-off-white-soft hover:text-off-white`. El **activo por sección** se marca con `text-off-white` y un punto dorado de 4px debajo, controlado por IntersectionObserver y con `aria-current="true"`.
- Derecha: toggle de idioma y un Button Primary Small "Booking" que lleva a `#contact` (desktop). En móvil va un IconButton de menú.
- Al hacer scroll más de 24px, la píldora pasa a `bg-dark/85`.
- **Menú móvil:** overlay `fixed inset-0 z-50 bg-dark` con los enlaces apilados en `font-display text-display-l`, numerados `01–06` en `text-eyebrow` dorado. Entra con fade + slide-up de 300ms. Botón de cerrar circular, `aria-expanded` en el disparador y `overflow-hidden` en `<body>` mientras está abierto.

### 7.4 Toggle de idioma

`flex p-1 rounded-full border border-line bg-dark/50`, con botones `h-8 px-3 rounded-full text-[12px] font-medium uppercase tracking-[0.1em]`.
Activo: `bg-accent text-dark` + `aria-pressed="true"`. Inactivo: `text-off-white-muted hover:text-off-white`. Ambos llevan anillo de foco.

### 7.5 Hero (`Hero.astro`)

- Layout desktop: grid de 12 columnas. Texto en `col-span-7`; retrato con surcos y satélite en `col-span-5`. Detrás van el halo dorado y la marca de agua "LE PROF".
- Contenido, en orden: eyebrow con punto ("Music Producer / DJ · Chihuahua – Mexico") → h1 `text-display-xl` (el nombre puede partirse en dos líneas, "Le" / "Prof") → una línea de `text-body-l text-off-white-soft` → fila de botones: Primary "Booking" + Secondary "Escuchar" (a `#works`).
- Debajo, una fila de 2–3 datos (por ejemplo años activo, número de eventos o releases), **solo si el contenido existe**: número en `font-display text-display-l` y etiqueta en `text-eyebrow text-off-white-muted`.
- Móvil: el retrato circular (220px) va arriba y centrado, con los surcos reducidos, y el texto debajo. Se elimina el patrón de foto de fondo con overlay negro.
- Alto: `min-h-[100svh]` con `pt-32` para librar la nav.

### 7.6 About / Statement

- Grid: retrato circular secundario con surcos en `col-span-4` y statement en `col-span-8`.
- El statement va en `text-display-m font-light text-off-white`, con la primera frase en `text-off-white` y el resto en `text-off-white-soft`, para que haya entrada sin cambiar de color.
- Debajo va la misión en `text-body-l text-off-white-soft max-w-[60ch]`.
- El botón satélite apunta a `#contact` o a la acción principal que exista.

### 7.7 Fila de track (`Tracks.astro`)

```html
<a class="group grid grid-cols-[3ch_1fr_auto] md:grid-cols-[4ch_1fr_auto_auto] items-center gap-4 md:gap-8 py-6 border-b border-line
          transition-colors duration-150 hover:bg-accent/[0.04] focus-visible:bg-accent/[0.04] -mx-4 px-4 rounded-3xl md:rounded-full
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
   href="…" target="_blank" rel="noopener noreferrer">
  <span class="text-meta tabular-nums text-off-white-muted group-hover:text-accent">01</span>
  <span>
    <span class="block font-display text-title text-off-white group-hover:text-accent transition-colors">Título</span>
    <span class="block text-meta text-off-white-muted">2026 · Release</span>
  </span>
  <span class="hidden md:inline-flex">[Chip plataforma]</span>
  <span class="size-11 rounded-full border border-line-strong grid place-items-center
               group-hover:bg-accent group-hover:border-accent group-hover:text-dark transition-colors">[flecha ↗ 18px]</span>
</a>
```

La fila completa es el área de clic. El índice va con cero a la izquierda.

### 7.8 Card de evento (`Events.astro`)

- `rounded-3xl bg-dark-lifted border border-line p-6 md:p-8 transition-colors hover:bg-dark-raised hover:border-line-strong`.
- Cabecera: a la izquierda el venue en `font-display text-title` y la ciudad en `text-meta text-off-white-muted`; a la derecha la fecha formateada con `Intl.DateTimeFormat(lang, { month: 'short', year: 'numeric' })` (por ejemplo "mar 2026" / "Mar 2026"). Ya no se muestra `YYYY-MM` crudo.
- Flyers: grid de miniaturas con clases (`grid-cols-2 md:grid-cols-3`, sin `style` inline), `aspect-[3/4] rounded-2xl object-cover`. En hover, `scale-[1.03]` en 700ms dentro de un `overflow-hidden rounded-2xl`. El foco usa el anillo dorado; se elimina `focus:outline-none` sin reemplazo.
- Grid de cards: `grid md:grid-cols-2 gap-6 md:gap-8`.

### 7.9 Galería (`Gallery.astro`)

- Mosaico bento de 12 columnas con imágenes `rounded-3xl overflow-hidden` y alturas alternas (`aspect-[4/5]`, `aspect-[16/10]`, `aspect-square`).
- Hover: imagen `scale-[1.04]` en 900ms con `ease-out-expo`.
- Pie opcional: chip de vidrio `absolute left-4 bottom-4` (nivel 3).
- Opcional: una sola imagen a sangre completa (`max-w-none rounded-none`) como respiro entre bloques.

### 7.10 Lightbox

- Overlay `fixed inset-0 z-[70] bg-dark/90 backdrop-blur-md grid place-items-center p-6`.
- Imagen `max-h-[85svh] w-auto rounded-3xl`, con pie `text-meta text-off-white-muted text-center mt-4`.
- Cerrar: IconButton circular arriba a la derecha.
- Entrada: fade del overlay (200ms) + `scale-95 → 100` de la imagen (300ms, `ease-out-expo`). Salida en espejo.
- **Obligatorio:** focus trap, foco inicial en cerrar, devolver el foco al disparador al cerrar, `overflow-hidden` en body, cierre con `Escape` y con clic en el fondo. `role="dialog" aria-modal="true" aria-label`.

### 7.11 Contact

- La sección contiene un **panel estadio**: `relative isolate overflow-hidden rounded-[40px] bg-dark-lifted border border-line px-6 py-16 md:px-16 md:py-24`, con la marca de agua "BOOKING" dentro.
- Contenido: eyebrow → h2 `text-display-l` (por ejemplo "Let's make it happen", vía i18n) → email en `text-display-m font-light` con subrayado animado (`bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-no-repeat bg-left-bottom hover:bg-[length:100%_1px] transition-[background-size] duration-300`, color `accent` en hover) → fila de botones: Primary "Send inquiry" (mailto) + Secondary "Copiar email" (copia al portapapeles y cambia a "Copiado ✓" durante 2s).
- Si existen redes sociales en el contenido, van como IconButtons debajo. Si no existen, no se inventan.

### 7.12 Footer

- `py-12 border-t border-line`, con el mismo contenedor `max-w-6xl`.
- Fila: a la izquierda "Le Prof" en `font-display text-title`; a la derecha un IconButton "volver arriba" (flecha ↑) que lleva a `#hero`.
- Debajo: © año en `text-eyebrow uppercase text-off-white-muted`.

---

## 8. Movimiento

### 8.1 Tokens

```js
transitionTimingFunction: { 'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)' },
```

| Duración | Uso |
|---|---|
| 150ms | Color, borde, fondo (hover de enlaces y botones) |
| 300ms | Componentes UI (menú, lightbox, toggles) |
| 700ms | Revelado de contenido al hacer scroll |
| 700–900ms | Zoom de imágenes en hover |

### 8.2 Revelado al hacer scroll

- Los elementos con `data-reveal` empiezan en `opacity-0 translate-y-6` y pasan a `opacity-100 translate-y-0` en 700ms con `ease-out-expo`.
- Un solo IntersectionObserver (`threshold: 0.15`, una sola vez) en un script global. Los hijos de `data-reveal-stagger` se escalonan 80ms.
- El h1 del hero se revela línea por línea: cada línea va dentro de `overflow-hidden` y sube desde `translate-y-full`.
- **`prefers-reduced-motion: reduce`:** sin revelado, sin rotación de surcos y sin zoom. Todo aparece estático. Va en CSS global, no componente por componente.
- Sin JS, el contenido debe verse. La clase de estado inicial la añade el script (`html.js [data-reveal]`), no el HTML.

### 8.3 Prohibido

Rebotes, parallax pesado, cursores custom, texto que se escribe solo, animaciones de más de 1s en UI y loops que no sean los surcos.

---

## 9. Iconografía e imágenes

- **Iconos:** SVG inline de trazo, estilo Lucide/Heroicons outline: `viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"`. **Un solo grosor: 1.5.** Tamaños: 16 (inline), 18–20 (botones), 24 (nav móvil). Sin librerías nuevas: se copian los paths a `src/components/ui/icons/`.
- Iconos en uso: flecha →, flecha ↗, flecha ↑, menú, cerrar (SVG, ya no `&times;`), play, copiar, check.
- **Fotos:** Cloudinary con transformaciones en la URL (`f_auto,q_auto,w_…`) y `srcset`/`sizes` para 640/1024/1600. Siempre `object-cover`. Retratos: `aspect-square rounded-full`. Galería y flyers con los radios de §5.1. `loading="lazy"` en todo salvo el retrato del hero (`fetchpriority="high"`).
- **Tratamiento:** sin filtros ni duotonos. Si una foto se ve muy brillante sobre el negro, se le aplica `brightness-90`, nunca un overlay negro.
- **Logotipo:** si `src/assets/leprof_logo.png` es el logo real, se usa en la nav en lugar del texto. Si no, se mantiene el wordmark tipográfico.
- **Favicon/manifest:** se usan los de `public/favicon/` con rutas corregidas, `name`/`short_name` = "Le Prof", y `theme_color`/`background_color` `#0e0e11`.

---

## 10. Contenido e i18n

- Se conserva `src/lib/i18n.ts` y su mecánica (`id`/`data-key`, evento `languagechange`). **Todo texto nuevo** (eyebrows, títulos de sección, botones, aria-labels, alt, marca de agua) se agrega en EN y ES.
- Al cambiar de idioma se actualiza también `<html lang>`, junto con `aria-label` y `alt`.
- Mayúsculas y minúsculas: sentence case en botones y títulos nuevos ("Selected works", "Trabajos seleccionados"). Title Case solo si ya existe en el contenido y no se toca.
- Registro: primera persona, profesional y cercano. No se reescribe la bio; solo se corrigen los espacios faltantes tras punto y coma, y se iguala el texto estático con el de i18n.
- Separadores: `·` en metadatos, `/` en roles, `–` en ubicaciones.
- El email vive en **una sola constante** compartida.

---

## 11. Accesibilidad

- **Foco visible en todo lo interactivo:** `focus-visible:ring-2 ring-accent ring-offset-2 ring-offset-dark` (en botones de nav y chips, `ring-offset-0`). Nunca `outline-none` sin reemplazo.
- Objetivos táctiles de 44×44px como mínimo.
- Contraste ≥ 4.5:1 en todo el texto (ver §2.4).
- `aria-expanded` en el menú, `aria-pressed` en el idioma, `aria-current` en la sección activa, `aria-hidden` en lo decorativo (surcos, marca de agua, grano, punto del eyebrow).
- Skip link "Saltar al contenido" como primer elemento focusable, visible al recibir foco.
- Los anclajes llevan `scroll-mt-24` para librar la nav flotante.
- Encabezados en orden: un `h1`, un `h2` por sección y `h3` en items.

---

## 12. Hacer / No hacer

**Hacer**
- Usar solo los tokens de §2. Alternar `dark` y `dark-lifted` para dar ritmo.
- Abrir cada sección con `SectionHeader`: eyebrow con punto dorado + numeración + `display-l`.
- Titulares en Inter Tight con tracking negativo; statement en Inter 300.
- Un solo CTA primario dorado por sección, siempre en píldora.
- Radios solo de la escala: 16 (anidado), 24, 40, píldora, círculo.
- Surcos y satélite solo alrededor de retratos circulares en Hero y About.
- Mismo contenedor `max-w-6xl` y mismo gutter en todas partes.
- Revelado al hacer scroll con `ease-out-expo` y respeto a `prefers-reduced-motion`.

**No hacer**
- Introducir colores nuevos, `black`, `white` o `gray-*`; usar gradientes aparte del halo del hero.
- Usar dorado en párrafos, fondos grandes o más de un botón primario por bloque.
- Usar radios de 4–12px, o sombras duras y cortas.
- Escribir en mayúsculas fuera de `text-eyebrow` (y del toggle de idioma).
- Bajar de `off-white-muted` para texto legible.
- Omitir el punto dorado del eyebrow.
- Poner surcos o marca de agua en más de dos lugares.
- Agregar librerías de animación o de iconos.

---

## 13. Migración desde v1 (checklist de implementación)

Esto resuelve las inconsistencias detectadas en la v1:

- [ ] Tokens nuevos en `tailwind.config.cjs`; eliminar `--accent` suelto en `Events.astro`.
- [ ] Overlays: `black` → `dark` (Hero, Events).
- [ ] `theme-color` y manifest a `#0e0e11`, con nombre y rutas de iconos corregidos.
- [ ] Quitar el scroll suave duplicado (dejar la clase en `<html>`), el `font-family` duplicado y el reset manual (Preflight ya lo hace).
- [ ] Cargar fuentes variables (Inter 300..600, Inter Tight 400..700) en lugar de 5 pesos estáticos.
- [ ] Un solo contenedor `max-w-6xl` y `py-24 md:py-32 lg:py-40` en todas las secciones.
- [ ] Un solo grosor de icono (1.5) y cerrar del lightbox en SVG.
- [ ] Transiciones con utilidades Tailwind (sin CSS suelto) y sin `transition-all`.
- [ ] Grid de flyers con clases, sin `style` inline.
- [ ] Foco visible en todo y escala de z-index de §5.3.
- [ ] `scroll-mt-24` en secciones y enlace en la nav a `#statement`.
- [ ] Contraste: eliminar `/40` y `/30` para texto.
- [ ] i18n: textos nuevos, `alt`, `aria-label` y `<html lang>` dinámico; corregir espacios en la bio.
- [ ] Email en una sola constante.
- [ ] `Mixes.astro`, `Welcome.astro`, `astro.svg`, `background.svg`, `public/favicon.svg` y el README de plantilla: **no borrar sin confirmar**; listarlos en el reporte final.