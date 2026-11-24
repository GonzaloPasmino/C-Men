import { universe } from '../data'
import { icons } from './Icons'
import Reveal from './Reveal'

// Guarda la posición del mouse dentro de la tarjeta para la luz dorada (.spot en index.css)
function trackMouse(e) {
  const r = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--x', `${e.clientX - r.left}px`)
  e.currentTarget.style.setProperty('--y', `${e.clientY - r.top}px`)
}

export default function Universe() {
  return (
    <section id="universo" className="mx-auto max-w-6xl px-5 py-28">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.4em] text-gold">Nuestro universo</p>
        <h2 className="mt-4 max-w-2xl font-serif text-4xl sm:text-5xl">
          Cuatro formas de pasarlo <em className="text-gold">bien.</em>
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {universe.map(({ id, title, text }, i) => {
          const Icon = icons[id]
          return (
            <Reveal key={id} delay={i * 110} className="h-full">
              <article
                onMouseMove={trackMouse}
                className="spot group h-full bg-surface p-8 transition-colors duration-500 hover:bg-raised"
              >
                <Icon className="text-gold transition duration-500 group-hover:-translate-y-1.5 group-hover:scale-110" />
                <h3 className="mt-10 font-serif text-2xl transition-colors duration-500 group-hover:text-gold">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{text}</p>
              </article>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
