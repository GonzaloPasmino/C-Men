import { members } from '../data'
import Reveal from './Reveal'

export default function Crew() {
  return (
    <section id="cuadrilla" className="border-t border-line bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 py-28">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-gold">Cuadrilla</p>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl">Quiénes somos</h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {members.map((m, i) => (
            <Reveal key={m.name} delay={i * 120}>
              <article className="group rounded-2xl border border-line bg-surface p-8 text-center transition duration-500 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-[0_20px_50px_-25px_rgba(201,169,106,0.35)]">
                <div className="mx-auto grid size-24 place-items-center rounded-full border border-gold/40 bg-raised font-serif text-3xl text-gold transition duration-500 group-hover:scale-105 group-hover:border-gold group-hover:shadow-[0_0_0_6px_rgba(201,169,106,0.08)]">
                  {m.name[0]}
                </div>
                <h3 className="mt-6 font-serif text-xl">{m.name}</h3>
                <p className="mt-1 text-sm text-muted">{m.role}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
