import { club } from '../data'

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-5 py-10 text-sm text-muted sm:flex-row sm:items-center">
        <p>
          <span className="font-serif tracking-[0.25em] text-bone">{club.name}</span> · desde {club.since}
        </p>
        <p>Disfruta con responsabilidad. Si tomas, no manejes.</p>
      </div>
    </footer>
  )
}
