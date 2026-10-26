import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { usePosts } from '../context/usePosts.jsx'

export default function CreatePost() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [error, setError] = useState('')
  const { addPost } = usePosts()
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()
    const trimmedTitle = title.trim()
    const trimmedContent = content.trim()

    if (!trimmedTitle || !trimmedContent) {
      setError('Add a title and some words before publishing.')
      return
    }

    const post = addPost({ title: trimmedTitle, content: trimmedContent })
    navigate('/', { replace: true, state: { createdPostId: post.id } })
  }

  return (
    <section className="mx-auto max-w-3xl py-8 sm:py-12">
      <Link to="/" className="inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.12em] text-muted transition-colors hover:text-moss">
        <span aria-hidden="true">←</span> Back to stories
      </Link>
      <div className="mt-8 border-b border-line pb-7 sm:mt-10 sm:pb-9">
        <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-moss">Your corner of the journal</p>
        <h1 className="mt-3 font-serif text-4xl tracking-[-0.04em] sm:text-6xl">Write a story.</h1>
        <p className="mt-3 text-sm leading-6 text-muted">A thought, a moment, an idea. Start wherever you are.</p>
      </div>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="mb-2 block text-[10px] font-extrabold uppercase tracking-[0.1em]" htmlFor="post-title">Story title</label>
          <input
            className="w-full border border-line bg-surface px-4 py-3.5 text-sm outline-none transition-colors placeholder:text-muted/70 focus:border-moss"
            id="post-title"
            name="title"
            type="text"
            placeholder="Give your story a name..."
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            maxLength={120}
            required
          />
          <p className="mt-2 text-right text-[10px] text-muted">{title.length}/120</p>
        </div>
        <div>
          <label className="mb-2 block text-[10px] font-extrabold uppercase tracking-[0.1em]" htmlFor="post-content">Your story</label>
          <textarea
            className="min-h-64 w-full resize-y border border-line bg-surface px-4 py-4 text-sm leading-7 outline-none transition-colors placeholder:text-muted/70 focus:border-moss sm:min-h-80"
            id="post-content"
            name="content"
            placeholder="Every good story starts somewhere..."
            value={content}
            onChange={(event) => setContent(event.target.value)}
            maxLength={10000}
            required
          />
          <p className="mt-2 text-right text-[10px] text-muted">{content.length}/10,000</p>
        </div>
        {error && <p className="text-xs font-medium text-red-700" role="alert">{error}</p>}
        <div className="flex flex-col-reverse gap-3 border-t border-line pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted">Your story will appear in the journal right away.</p>
          <button
            className="rounded-md bg-moss px-6 py-3 text-[10px] font-extrabold uppercase tracking-[0.1em] text-white transition-colors hover:bg-ink disabled:cursor-not-allowed disabled:opacity-50"
            type="submit"
            disabled={!title.trim() || !content.trim()}
          >
            Publish story <span aria-hidden="true">↗</span>
          </button>
        </div>
      </form>
    </section>
  )
}
