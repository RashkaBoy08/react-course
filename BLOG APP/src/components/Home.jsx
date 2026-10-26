import { useMemo } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { usePosts } from '../context/usePosts.jsx'

function StoryCard({ post }) {
  return (
    <article className="group">
      <Link
        to={`/posts/${post.id}`}
        className="relative mb-4 block aspect-[1.45/1] overflow-hidden bg-line"
        aria-label={`Read ${post.title}`}
      >
        <img
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          src={post.image}
          alt=""
          loading="lazy"
        />
        <span className="absolute left-3 top-3 bg-paper px-2.5 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.12em] text-ink sm:left-4 sm:top-4">
          {post.category}
        </span>
        <span className="absolute bottom-3 right-3 grid size-8 place-items-center rounded-full bg-paper text-sm text-ink transition-colors group-hover:bg-moss group-hover:text-white sm:bottom-4 sm:right-4">
          ↗
        </span>
      </Link>
      <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-muted">
        <span>{post.date}</span><span aria-hidden="true">/</span><span>{post.readTime}</span>
      </div>
      <Link
        to={`/posts/${post.id}`}
        className="mt-2 block font-serif text-[21px] leading-[1.17] tracking-[-0.02em] transition-colors group-hover:text-moss sm:text-[25px]"
      >
        {post.title}
      </Link>
      <p className="mt-2 text-xs leading-6 text-muted sm:text-sm">{post.excerpt}</p>
      <div className="mt-4 flex items-center gap-2 text-[11px] font-bold">
        <span className="grid size-7 place-items-center rounded-full bg-surface text-[9px] text-moss">{post.initials}</span>
        {post.author}
      </div>
    </article>
  )
}

export default function Home() {
  const { posts } = usePosts()
  const location = useLocation()
  const navigate = useNavigate()
  const searchTerm = new URLSearchParams(location.search).get('search') ?? ''
  const normalizedSearch = searchTerm.trim().toLocaleLowerCase()
  const visiblePosts = useMemo(
    () => posts.filter((post) => post.title.toLocaleLowerCase().includes(normalizedSearch)),
    [posts, normalizedSearch],
  )

  function updateSearch(event) {
    const value = event.target.value
    const params = new URLSearchParams(location.search)

    if (value.trim()) {
      params.set('search', value)
    } else {
      params.delete('search')
    }

    const query = params.toString()
    navigate({ pathname: '/', search: query ? `?${query}` : '' }, { replace: true })
  }

  const featuredPost = !normalizedSearch ? posts[0] : null
  const listedPosts = featuredPost ? visiblePosts.filter((post) => post.id !== featuredPost.id) : visiblePosts
  const createdPost = posts.find((post) => post.id === location.state?.createdPostId)

  return (
    <div className="pb-8">
      <section className="grid gap-8 border-b border-line py-10 sm:py-14 lg:grid-cols-[1fr_300px] lg:items-end lg:gap-12 lg:py-[72px]">
        <div>
          <div className="mb-4 flex items-center gap-2 text-[9px] font-extrabold uppercase tracking-[0.2em] text-moss sm:text-[10px]">
            <span className="h-px w-7 bg-moss" /> Independent ideas, since 2025
          </div>
          <h1 className="max-w-4xl font-serif text-[clamp(2rem,10vw,2.6875rem)] leading-[0.98] tracking-[-0.035em] sm:text-6xl lg:text-[78px]">
            Read something<br className="hidden sm:block" /> that <span className="italic text-moss">stays with you.</span>
          </h1>
          <p className="mt-5 max-w-xl text-xs leading-6 text-muted sm:mt-6 sm:text-sm sm:leading-7">
            Essays, small discoveries, and notes on living a little more thoughtfully.
          </p>
        </div>
        <div className="flex items-end justify-between border-t border-line pt-4 lg:justify-self-end lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
          <div>
            <p className="font-serif text-4xl leading-none tracking-[-0.06em]">{String(posts.length).padStart(2, '0')}</p>
            <p className="mt-2 text-[9px] font-extrabold uppercase tracking-[0.15em] text-muted">Stories in the journal</p>
          </div>
          <span className="font-serif text-4xl italic text-moss" aria-hidden="true">✳</span>
        </div>
      </section>

      {createdPost && (
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-l-2 border-moss bg-accent-soft px-4 py-3 text-xs">
          <p><span className="font-bold text-moss">Your story is live.</span> {createdPost.title}</p>
          <Link className="font-bold text-moss underline underline-offset-4" to={`/posts/${createdPost.id}`}>Read it ↗</Link>
        </div>
      )}

      {featuredPost && (
        <section className="py-8 sm:py-12" aria-labelledby="featured-heading">
          <div className="mb-4 flex items-center justify-between">
            <h2 id="featured-heading" className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-muted">Editor&apos;s pick</h2>
            <span className="text-[10px] font-bold text-muted">01 <span className="mx-1 text-moss">/</span> {String(posts.length).padStart(2, '0')}</span>
          </div>
          <Link
            to={`/posts/${featuredPost.id}`}
            className="group grid overflow-hidden border border-line bg-surface md:min-h-[340px] md:grid-cols-[0.9fr_1.1fr]"
          >
            <div className="flex min-h-[280px] flex-col items-start p-6 sm:min-h-[320px] sm:p-10 lg:p-12">
              <span className="border-l-2 border-moss pl-2 text-[9px] font-extrabold uppercase tracking-[0.16em] text-moss">
                {featuredPost.category} <span className="mx-1 text-muted">/</span> {featuredPost.readTime}
              </span>
              <h3 className="mt-6 max-w-lg font-serif text-[32px] leading-[1.04] tracking-[-0.035em] sm:mt-8 sm:text-5xl lg:text-[54px]">
                {featuredPost.title}
              </h3>
              <p className="mt-3 max-w-md text-xs leading-6 text-muted sm:mt-4 sm:text-sm sm:leading-7">{featuredPost.excerpt}</p>
              <span className="mt-auto flex items-center gap-3 pt-6 text-[10px] font-extrabold uppercase tracking-[0.1em]">
                Read the story <span className="grid size-8 place-items-center rounded-full bg-moss text-sm text-white transition-transform group-hover:translate-x-1">↗</span>
              </span>
            </div>
            <div className="relative min-h-[220px] overflow-hidden bg-line md:min-h-full">
              <img
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                src={featuredPost.image}
                alt=""
                fetchPriority="high"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 text-[9px] font-bold uppercase tracking-[0.15em] text-white sm:bottom-6 sm:left-6">
                {featuredPost.author} <span className="mx-1 text-white/70">/</span> {featuredPost.date}
              </span>
            </div>
          </Link>
        </section>
      )}

      <section className="border-t border-line py-8 sm:py-12" aria-labelledby="stories-heading">
        <div className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-moss">Fresh perspectives</p>
            <h2 id="stories-heading" className="mt-1.5 font-serif text-3xl tracking-[-0.035em] sm:text-4xl">
              {normalizedSearch ? 'Search results' : 'The latest stories'}
            </h2>
          </div>
          <label className="flex h-10 w-full items-center gap-2.5 border-b border-ink/25 bg-transparent px-1 text-muted transition-colors focus-within:border-moss sm:w-[240px]">
            <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="size-4 shrink-0">
              <circle cx="8.75" cy="8.75" r="5.75" stroke="currentColor" strokeWidth="1.5" />
              <path d="m13 13 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              className="w-full bg-transparent text-xs text-ink outline-none placeholder:text-muted"
              type="search"
              placeholder="Search the journal"
              value={searchTerm}
              onChange={updateSearch}
              aria-label="Search stories by title"
            />
          </label>
        </div>

        {listedPosts.length > 0 ? (
          <div className="grid gap-x-6 gap-y-9 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
            {listedPosts.map((post) => <StoryCard key={post.id} post={post} />)}
          </div>
        ) : (
          <div className="border border-dashed border-line px-6 py-12 text-center">
            <span className="font-serif text-4xl italic text-moss">Nothing here yet.</span>
            <p className="mt-2 text-xs text-muted">Try another title, or clear your search to see every story.</p>
            <button
              className="mt-4 text-[10px] font-extrabold uppercase tracking-[0.1em] text-moss underline underline-offset-4"
              type="button"
              onClick={() => navigate('/', { replace: true })}
            >
              Clear search
            </button>
          </div>
        )}
      </section>
    </div>
  )
}
