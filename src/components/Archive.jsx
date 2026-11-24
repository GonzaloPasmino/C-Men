import { useState } from 'react'
import { memories, universe } from '../data'
import { icons } from './Icons'
import { formatDate } from '../format'
import Reveal from './Reveal'

// Cada categoría tiene su propio degradado (se escribe completo para que Tailwind lo detecte)
const tint = {
  barra: 'from-[#4a3512] via-[#1d160b] to-ink',
  fuego: 'from-[#5a2a14] via-[#1f120c] to-ink',
  noche: 'from-[#252a45] via-[#12141f] to-ink',
  cumbre: 'from-[#2b4a37] via-[#111a15] to-ink',
}

export default function Archive() {
  const [filter, setFilter] = useState('todo')
  const shown = filter === 'todo' ? memories : memories.filter((m) => m.cat === filter)

  return (
    <section id="archivo" className="border-t border-line bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 py-28">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-gold">Archivo</p>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">Lo que ya vivimos</h2>
          </div>

          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filtrar recuerdos">
            {[{ id: 'todo', title: 'Todo' }, ...universe].map((c) => (
              <button
                key={c.id}
                role="tab"
                aria-selected={filter === c.id}
                onClick={() => setFilter(c.id)}
                className={`rounded-full border px-4 py-1.5 text-sm transition duration-300 active:scale-95 ${
                  filter === c.id
                    ? 'border-gold bg-gold text-ink'
                    : 'border-line text-muted hover:border-gold/50 hover:text-bone'
                }`}
              >
                {c.title.replace(/^(La|El) /, '').replace(/^./, (s) => s.toUpperCase())}
              </button>
            ))}
          </div>
        </Reveal>

        {/* key={filter}: al cambiar de filtro las tarjetas se vuelven a montar y reaparecen animadas */}
        <div key={filter} className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {shown.map((m, i) => {
            const Icon = icons[m.cat]
            return (
              <Reveal key={m.id} delay={i * 90}>
                <article className="group overflow-hidden rounded-2xl border border-line bg-surface transition duration-500 hover:-translate-y-2 hover:border-gold/40 hover:shadow-[0_24px_60px_-30px_rgba(201,169,106,0.45)]">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-linear-to-b ${tint[m.cat]} transition-transform duration-700 ease-out group-hover:scale-110`}
                    />
                    {m.foto && (
                      <img
                        src={`${import.meta.env.BASE_URL}${m.foto}`}
                        alt={m.title}
                        className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                    )}
                    <Icon className="absolute right-4 top-4 text-bone/40 transition duration-500 group-hover:rotate-12 group-hover:text-gold" />
                    <span className="absolute bottom-3 left-4 font-serif text-5xl text-bone/10 transition duration-500 group-hover:-translate-y-1 group-hover:text-gold/30">
                      {String(m.id).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-lg">{m.title}</h3>
                    <p className="mt-1 text-xs text-muted">
                      {formatDate(m.date)} · {m.place}
                    </p>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>

        {shown.length === 0 && <p className="mt-12 text-muted">Aún no hay recuerdos en esta categoría.</p>}
      </div>
    </section>
  )
}
