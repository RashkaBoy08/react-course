import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { usePosts } from '../context/usePosts.jsx'

export default function PostDetail() {
  const { postId } = useParams()
  const { posts } = usePosts()
  const navigate = useNavigate()
  const location = useLocation()
  const postIndex = posts.findIndex((post) => post.id === postId)
  const post = posts[postIndex]

  if (!post) {
    return (
      <section className="mx-auto max-w-xl py-24 text-center sm:py-32">
        <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-moss">This page is a blank page</p>
        <h1 className="mt-4 font-serif text-4xl tracking-[-0.04em]">Story not found</h1>
        <p className="mt-3 text-sm leading-6 text-muted">This story may have moved, or the link might be incomplete.</p>
        <Link className="mt-7 inline-flex rounded-md bg-moss px-5 py-3 text-[10px] font-extrabold uppercase tracking-[0.1em] text-white transition-colors hover:bg-ink" to="/">
          Back to all stories
        </Link>
      </section>
    )
  }

  const paragraphs = post.content.split(/\n{2,}/).filter(Boolean)

  function moveToPost(nextIndex) {
    const nextPost = posts[nextIndex]
    navigate(`/posts/${nextPost.id}`, {
      state: { fromPostId: post.id, previousLocation: location.pathname },
    })
  }

  return (
    <article className="mx-auto max-w-4xl pb-8">
      <Link to="/" className="mt-7 inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.12em] text-muted transition-colors hover:text-moss sm:mt-10">
        <span aria-hidden="true">←</span> All stories
      </Link>
      <header className="pb-7 pt-9 sm:pb-9 sm:pt-12">
        <div className="flex flex-wrap items-center gap-2 text-[9px] font-extrabold uppercase tracking-[0.16em] text-moss">
          <span>{post.category}</span><span aria-hidden="true">/</span><span>{post.readTime}</span>
        </div>
        <h1 className="mt-5 max-w-3xl font-serif text-[40px] leading-[1.03] tracking-[-0.04em] sm:text-6xl lg:text-[72px]">
          {post.title}
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-muted sm:text-base sm:leading-8">{post.excerpt}</p>
        <div className="mt-6 flex items-center gap-3 border-b border-line pb-7">
          <span className="grid size-9 place-items-center rounded-full bg-surface text-[10px] font-extrabold text-moss">{post.initials}</span>
          <div>
            <p className="text-xs font-semibold">{post.author}</p>
            <p className="mt-1 text-[11px] text-muted">{post.date}</p>
          </div>
        </div>
      </header>
      <div className="relative mb-8 aspect-[1.8/1] overflow-hidden bg-line sm:mb-10">
        <img className="h-full w-full object-cover" src={post.image} alt="" />
        <span className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
        <span className="absolute bottom-4 left-4 text-[9px] font-extrabold uppercase tracking-[0.15em] text-white sm:bottom-6 sm:left-6">{post.category} <span className="mx-1">/</span> {post.date}</span>
      </div>
      <div className="mx-auto max-w-2xl space-y-6 text-sm leading-8 text-ink/80 sm:text-base sm:leading-9">
        {paragraphs.map((paragraph, index) => <p key={`${post.id}-${index}`}>{paragraph}</p>)}
      </div>
      <div className="mt-12 border-t border-line pt-7">
        <div className="mb-4 flex items-center justify-between text-[9px] font-extrabold uppercase tracking-[0.18em] text-muted">
          <span>Keep wandering</span>
          <span>{String(postIndex + 1).padStart(2, '0')} / {String(posts.length).padStart(2, '0')}</span>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          {postIndex > 0 ? (
            <button
              className="flex flex-1 items-center justify-between border border-line bg-surface px-5 py-4 text-left transition-colors hover:border-moss"
              type="button"
              onClick={() => moveToPost(postIndex - 1)}
            >
              <span><span className="block text-[9px] font-extrabold uppercase tracking-[0.12em] text-muted">Previous story</span><span className="mt-1 block font-serif text-base">{posts[postIndex - 1].title}</span></span>
              <span aria-hidden="true" className="ml-4 text-moss">←</span>
            </button>
          ) : <div className="hidden flex-1 sm:block" />}
          {postIndex < posts.length - 1 ? (
            <button
              className="flex flex-1 items-center justify-between border border-line bg-surface px-5 py-4 text-left transition-colors hover:border-moss"
              type="button"
              onClick={() => moveToPost(postIndex + 1)}
            >
              <span><span className="block text-[9px] font-extrabold uppercase tracking-[0.12em] text-muted">Next story</span><span className="mt-1 block font-serif text-base">{posts[postIndex + 1].title}</span></span>
              <span aria-hidden="true" className="ml-4 text-moss">→</span>
            </button>
          ) : <div className="hidden flex-1 sm:block" />}
        </div>
      </div>
    </article>
  )
}
