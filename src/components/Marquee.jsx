const words = ['Whisky', 'Brasas', 'Montaña', 'Música', 'Madrugadas', 'Cerveza artesanal', 'Fogata', 'Vinilos']

export default function Marquee() {
  // Se repite la lista dos veces para que el bucle no tenga saltos
  const items = [...words, ...words]
  return (
    <div className="group overflow-hidden border-y border-line bg-surface py-5" aria-hidden>
      <div className="flex w-max animate-marquee gap-10 font-serif text-2xl italic text-muted group-hover:[animation-play-state:paused]">
        {items.map((w, i) => (
          <span key={i} className="flex items-center gap-10 whitespace-nowrap">
            {w}
            <span className="text-gold not-italic">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
