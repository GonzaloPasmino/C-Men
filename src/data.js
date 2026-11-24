// Aquí viven los textos y datos de la web. Para cambiar contenido,
// edita este archivo: es la forma más fácil de hacer tu primer Pull Request.

export const club = {
  name: 'C-MEN',
  since: 2026,
  tagline: 'Buena mesa, mejor compañía.',
}

// Los cuatro "mundos" del grupo
export const universe = [
  {
    id: 'barra',
    title: 'La barra',
    text: 'Whisky, cócteles de autor y cerveza artesanal. Calidad antes que cantidad.',
  },
  {
    id: 'fuego',
    title: 'El fuego',
    text: 'Asados largos, brasas y una mesa que se alarga sola hasta la madrugada.',
  },
  {
    id: 'noche',
    title: 'La noche',
    text: 'Buena música, buena gente y ese último trago que nadie quiere que termine.',
  },
  {
    id: 'cumbre',
    title: 'La cumbre',
    text: 'Trekking, camping y silencio. Salir de la ciudad también es parte del plan.',
  },
]

// Archivo de recuerdos. Cuando tengan fotos, agreguen una en la carpeta
// public/ y pongan su nombre en el campo "foto" (ej: foto: 'cumbre.jpg').
export const memories = [
  { id: 1, cat: 'fuego', title: 'Asado de bienvenida', date: '2026-11-15', place: 'Parcela', foto: null },
  { id: 2, cat: 'noche', title: 'Una noche cualquiera', date: '2026-11-02', place: 'Centro', foto: null },
  { id: 3, cat: 'cumbre', title: 'Primera caminata', date: '2026-10-19', place: 'Cordillera', foto: null },
  { id: 4, cat: 'barra', title: 'Cata de whisky', date: '2026-10-04', place: 'En casa', foto: null },
]

// Planes de ejemplo (se guardan en el navegador de cada persona)
export const seedPlans = [
  { id: 'p1', cat: 'fuego', title: 'Asado en la parcela', date: '2026-12-12' },
  { id: 'p2', cat: 'cumbre', title: 'Camping y fogata', date: '2027-01-09' },
  { id: 'p3', cat: 'noche', title: 'Año nuevo, nuestro estilo', date: '2026-12-31' },
]

// La cuadrilla: cambien nombre y rol por los reales
export const members = [
  { name: 'Gonzalo', role: 'Fundador · parrillero' },
  { name: 'Tu amigo', role: 'Selector musical' },
  { name: 'Próximo', role: 'Plaza disponible' },
]
