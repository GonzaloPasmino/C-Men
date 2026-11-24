// Iconos simples dibujados con trazos finos (mismo estilo en toda la web)
const base = {
  width: 28,
  height: 28,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

export const BarIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M5 4h14l-7 9-7-9Z" />
    <path d="M12 13v7M8 20h8" />
  </svg>
)

export const FireIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M12 3c1 3.5 5 5.5 5 10a5 5 0 0 1-10 0c0-2 1-3 2-4 .3 1.2 1 2 2 2-.5-3 0-5 1-8Z" />
  </svg>
)

export const MoonIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z" />
  </svg>
)

export const PeakIcon = (p) => (
  <svg {...base} {...p}>
    <path d="m3 19 6-11 4 7 2-3 6 7H3Z" />
  </svg>
)

export const icons = { barra: BarIcon, fuego: FireIcon, noche: MoonIcon, cumbre: PeakIcon }
