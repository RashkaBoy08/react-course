import { useState } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/useAuth.jsx'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login, isAuthenticated } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()

  if (isAuthenticated) {
    return <Navigate to="/create" replace />
  }

  function handleSubmit(event) {
    event.preventDefault()
    const normalizedEmail = email.trim()

    if (!normalizedEmail || !password) {
      setError('Enter an email and password to continue.')
      return
    }

    const name = normalizedEmail.split('@')[0].replace(/[._-]+/g, ' ').trim()
    const displayName = name.replace(/\b\w/g, (letter) => letter.toUpperCase()) || 'Writer'
    login({ name: displayName, email: normalizedEmail })
    const from = location.state?.from
    const destination = from
      ? `${from.pathname}${from.search ?? ''}${from.hash ?? ''}`
      : '/create'
    navigate(destination, { replace: true })
  }

  return (
    <section className="mx-auto grid max-w-5xl gap-8 py-8 sm:py-12 lg:grid-cols-[1fr_0.9fr] lg:items-stretch lg:gap-12">
      <div className="relative hidden min-h-[520px] overflow-hidden bg-line lg:block">
        <img className="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=85" alt="" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/10" />
        <div className="absolute left-8 top-8 text-[10px] font-extrabold uppercase tracking-[0.18em] text-white">Draft <span className="text-accent">/</span> The journal</div>
        <div className="absolute bottom-9 left-8 right-8 text-white">
          <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-accent">A quiet corner to begin</p>
          <h1 className="mt-3 font-serif text-5xl leading-[1.03] tracking-[-0.035em]">Your words<br />belong here.</h1>
          <p className="mt-4 max-w-sm text-xs leading-6 text-white/75">Join a little community of curious minds. Sign in to share a thought of your own.</p>
        </div>
      </div>
      <div className="flex flex-col justify-center lg:px-2">
        <Link to="/" className="inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.12em] text-muted transition-colors hover:text-moss">
          <span aria-hidden="true">←</span> Back to stories
        </Link>
        <div className="mt-8 sm:mt-10">
          <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-moss">Welcome in</p>
          <h2 className="mt-3 font-serif text-4xl tracking-[-0.04em] sm:text-5xl">Log in to Draft.</h2>
          <p className="mt-3 text-sm leading-6 text-muted">Sign in to write and publish your own story.</p>
        </div>
        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="mb-2 block text-[10px] font-extrabold uppercase tracking-[0.1em]" htmlFor="email">Email address</label>
            <input
              className="w-full border border-line bg-surface px-4 py-3.5 text-sm outline-none transition-colors placeholder:text-muted/70 focus:border-moss"
              id="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div>
            <label className="mb-2 block text-[10px] font-extrabold uppercase tracking-[0.1em]" htmlFor="password">Password</label>
            <input
              className="w-full border border-line bg-surface px-4 py-3.5 text-sm outline-none transition-colors placeholder:text-muted/70 focus:border-moss"
              id="password"
              type="password"
              autoComplete="current-password"
              placeholder="Enter any password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>
          {error && <p className="text-xs font-medium text-red-700" role="alert">{error}</p>}
          <button className="w-full rounded-md bg-moss px-5 py-3.5 text-[10px] font-extrabold uppercase tracking-[0.1em] text-white transition-colors hover:bg-ink" type="submit">
            Continue to Draft <span aria-hidden="true">↗</span>
          </button>
          <p className="text-center text-[11px] leading-5 text-muted">Demo sign-in — no account needed. Any email and password will work.</p>
        </form>
      </div>
    </section>
  )
}
