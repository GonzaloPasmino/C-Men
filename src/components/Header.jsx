import { useEffect, useState } from 'react'
import { club } from '../data'

const links = [
  { href: '#universo', label: 'Universo' },
  { href: '#archivo', label: 'Archivo' },
  { href: '#planes', label: 'Planes' },
  { href: '#cuadrilla', label: 'Cuadrilla' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    function onScroll() {
      const max = document.documentElement.scrollHeight - innerHeight
      setScrolled(scrollY > 24)
      setProgress(max > 0 ? Math.min(scrollY / max, 1) : 0)
    }
    onScroll()
    addEventListener('scroll', onScroll, { passive: true })
    return () => removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md transition-all duration-500 ${
        scrolled ? 'border-line bg-ink/85 shadow-[0_10px_40px_-20px_#000]' : 'border-transparent bg-ink/20'
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-5 transition-all duration-500 ${
          scrolled ? 'h-14' : 'h-16'
        }`}
      >
        <a href="#top" className="group flex items-center gap-3" aria-label={`${club.name}, ir al inicio`}>
          <span className="grid size-8 place-items-center rounded-full border border-gold/60 font-serif text-gold transition duration-500 group-hover:rotate-[360deg] group-hover:bg-gold group-hover:text-ink">
            C
          </span>
          <span className="font-serif text-lg tracking-[0.25em]">{club.name}</span>
        </a>

        <nav aria-label="Principal" className="hidden gap-8 text-sm text-muted md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="link-draw transition-colors hover:text-bone">
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#planes"
          className="rounded-full border border-gold/50 px-4 py-1.5 text-sm text-gold transition duration-300 hover:bg-gold hover:text-ink"
        >
          Próximo plan
        </a>
      </div>

      {/* Barra dorada de progreso de lectura */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px origin-left bg-gold"
        style={{ transform: `scaleX(${progress})` }}
      />
    </header>
  )
}
