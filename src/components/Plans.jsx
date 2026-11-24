import { useState } from 'react'
import { seedPlans, universe } from '../data'
import { icons } from './Icons'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { formatDate } from '../format'
import Reveal from './Reveal'

export default function Plans() {
  const [plans, setPlans] = useLocalStorage('cmen-plans', seedPlans)
  const [title, setTitle] = useState('')
  const [cat, setCat] = useState('fuego')
  const [date, setDate] = useState('')

  const sorted = [...plans].sort((a, b) => a.date.localeCompare(b.date))

  function addPlan(e) {
    e.preventDefault()
    if (!title.trim() || !date) return
    setPlans([...plans, { id: crypto.randomUUID(), cat, title: title.trim(), date }])
    setTitle('')
    setDate('')
  }

  const field =
    'w-full min-w-0 rounded-lg border border-line bg-ink px-4 py-2.5 text-sm text-bone outline-none transition focus:border-gold/70'

  return (
    <section id="planes" className="mx-auto max-w-6xl px-5 py-28">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.4em] text-gold">Agenda</p>
        <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
          Lo que <em className="text-gold">viene.</em>
        </h2>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr]">
        <Reveal as="ul" className="divide-y divide-line border-y border-line self-start">
          {sorted.map((p) => {
            const Icon = icons[p.cat]
            return (
              <li
                key={p.id}
                className="group flex animate-rise items-center gap-5 py-5 transition-all duration-300 hover:bg-white/[0.02] hover:pl-3"
              >
                <Icon className="shrink-0 text-gold transition duration-300 group-hover:scale-110" />
                <div className="min-w-0 flex-1">
                  <p className="truncate font-serif text-xl">{p.title}</p>
                  <p className="text-sm text-muted">{formatDate(p.date)}</p>
                </div>
                <button
                  onClick={() => setPlans(plans.filter((x) => x.id !== p.id))}
                  className="rounded-full px-3 py-1 text-xs text-muted opacity-0 transition hover:text-ember focus:opacity-100 group-hover:opacity-100"
                  aria-label={`Quitar ${p.title}`}
                >
                  Quitar
                </button>
              </li>
            )
          })}
          {sorted.length === 0 && <li className="py-8 text-muted">No hay planes. Propongan el primero.</li>}
        </Reveal>

        <Reveal as="form" delay={150} onSubmit={addPlan} className="h-fit space-y-4 rounded-2xl border border-line bg-surface p-6">
          <h3 className="font-serif text-xl">Proponer un plan</h3>
          <label className="block text-xs text-muted">
            Qué hacemos
            <input
              className={`${field} mt-1.5`}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Ej. Asado en la parcela"
              maxLength={60}
            />
          </label>
          <div className="grid grid-cols-2 gap-4">
            <label className="block min-w-0 text-xs text-muted">
              Tipo
              <select className={`${field} mt-1.5`} value={cat} onChange={(e) => setCat(e.target.value)}>
                {universe.map((u) => (
                  <option key={u.id} value={u.id}>
                    {u.title}
                  </option>
                ))}
              </select>
            </label>
            <label className="block min-w-0 text-xs text-muted">
              Fecha
              <input
                type="date"
                className={`${field} mt-1.5 [color-scheme:dark]`}
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </label>
          </div>
          <button
            type="submit"
            className="btn-shine w-full rounded-full bg-gold py-3 text-sm font-medium text-ink transition duration-300 hover:bg-bone active:scale-[0.98]"
          >
            Agregar a la agenda
          </button>
          <p className="text-xs text-muted">Por ahora los planes se guardan solo en tu navegador.</p>
        </Reveal>
      </div>
    </section>
  )
}
