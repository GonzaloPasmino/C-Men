// "2026-11-15" -> "15 nov 2026". Se fija la hora al mediodía para evitar saltos de zona horaria.
export function formatDate(iso) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString('es-CL', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}
