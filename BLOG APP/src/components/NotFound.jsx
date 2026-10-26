import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="mx-auto max-w-xl py-24 text-center sm:py-32">
      <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-moss">404 / Not found</p>
      <h1 className="mt-4 font-serif text-5xl tracking-[-0.04em]">A page out of place.</h1>
      <p className="mt-4 text-sm leading-6 text-muted">We couldn't find that page. Let's get you back to something worth reading.</p>
      <Link className="mt-7 inline-flex rounded-md bg-moss px-5 py-3 text-[10px] font-extrabold uppercase tracking-[0.1em] text-white transition-colors hover:bg-ink" to="/">
        Explore the stories <span className="ml-2" aria-hidden="true">↗</span>
      </Link>
    </section>
  )
}
