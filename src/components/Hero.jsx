import { useEffect, useRef } from 'react'
import { club } from '../data'

// Brasas con posición, tamaño y velocidad fijos (así el diseño es estable entre recargas)
const embers = Array.from({ length: 18 }, (_, i) => ({
  left: (i * 37 + 11) % 100,
  size: 3 + ((i * 5) % 5),
  duration: 9 + ((i * 7) % 9),
  delay: -((i * 13) % 14),
  drift: ((i % 2 ? 1 : -1) * (20 + ((i * 11) % 50))),
}))

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    let frame = 0

    // Parallax: las montañas se mueven más lento que el scroll
    function onScroll() {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        el.style.setProperty('--py', `${Math.min(scrollY, 900)}px`)
      })
    }
    addEventListener('scroll', onScroll, { passive: true })
    return () => {
      removeEventListener('scroll', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  // Luz cálida que sigue al mouse
  function onMove(e) {
    const r = ref.current.getBoundingClientRect()
    ref.current.style.setProperty('--mx', `${e.clientX - r.left}px`)
    ref.current.style.setProperty('--my', `${e.clientY - r.top}px`)
  }

  return (
    <section
      ref={ref}
      id="top"
      onMouseMove={onMove}
      className="relative isolate flex min-h-svh items-center overflow-hidden pt-16 [--mx:50%] [--my:40%] [--py:0px]"
    >
      {/* Resplandor fijo, como luz de fogata */}
      <div
        aria-hidden
        className="absolute left-1/2 top-[38%] -z-10 size-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(201,169,106,0.20),rgba(180,83,42,0.07)_45%,transparent_70%)]"
      />
      {/* Luz que sigue al cursor */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-70 transition-[background] duration-300"
        style={{
          background: 'radial-gradient(420px circle at var(--mx) var(--my), rgba(201,169,106,0.10), transparent 65%)',
        }}
      />

      {/* Brasas */}
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
        {embers.map((e, i) => (
          <span
            key={i}
            className="ember"
            style={{
              left: `${e.left}%`,
              width: e.size,
              height: e.size,
              animationDuration: `${e.duration}s`,
              animationDelay: `${e.delay}s`,
              '--drift': `${e.drift}px`,
            }}
          />
        ))}
      </div>

      {/* Siluetas de montaña con parallax en dos capas */}
      <svg
        aria-hidden
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 -z-10 h-[34%] w-full will-change-transform"
        style={{ transform: 'translateY(calc(var(--py) * -0.08))' }}
      >
        <path
          fill="#101012"
          d="M0 220 190 120 330 200 520 70 700 190 880 100 1080 210 1260 130 1440 200V320H0Z"
        />
      </svg>
      <svg
        aria-hidden
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 -z-10 h-[34%] w-full will-change-transform"
        style={{ transform: 'translateY(calc(var(--py) * 0.04))' }}
      >
        <path
          fill="#0b0b0c"
          d="M0 270 150 210 330 260 520 170 720 255 940 190 1130 262 1300 215 1440 250V320H0Z"
        />
      </svg>

      <div className="mx-auto w-full max-w-6xl px-5">
        <p className="animate-rise text-xs uppercase tracking-[0.4em] text-gold">
          Club privado · desde {club.since}
        </p>

        <h1 className="animate-rise mt-6 max-w-4xl font-serif text-5xl leading-[1.04] [animation-delay:120ms] sm:text-7xl md:text-8xl">
          Buena mesa,
          <br />
          <em className="shimmer">mejor compañía.</em>
        </h1>

        <p className="animate-rise mt-8 max-w-xl text-lg leading-relaxed text-muted [animation-delay:240ms]">
          Brasas, buena barra, noches largas y montaña. Un archivo de lo que vivimos y la agenda de lo que
          viene.
        </p>

        <div className="animate-rise mt-10 flex flex-wrap gap-4 [animation-delay:360ms]">
          <a
            href="#planes"
            className="btn-shine rounded-full bg-gold px-7 py-3 font-medium text-ink transition duration-300 hover:-translate-y-0.5 hover:bg-bone hover:shadow-[0_12px_30px_-10px_rgba(201,169,106,0.6)]"
          >
            Ver próximos planes
          </a>
          <a
            href="#archivo"
            className="rounded-full border border-line px-7 py-3 text-bone transition duration-300 hover:-translate-y-0.5 hover:border-gold/60 hover:bg-white/5"
          >
            Abrir el archivo
          </a>
        </div>
      </div>

      {/* Indicador de scroll */}
      <a
        href="#universo"
        aria-label="Bajar"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.35em] text-muted transition hover:text-gold sm:flex"
      >
        Explorar
        <span className="block h-10 w-px animate-pulse bg-gradient-to-b from-gold to-transparent" />
      </a>
    </section>
  )
}
