import { useMemo, useState } from 'react'
import { PostsContext } from './PostsContext.jsx'

const initialPosts = [
  {
    id: 'small-rituals-big-days',
    title: 'Small rituals for the big, noisy days',
    excerpt: 'A gentler morning is less about doing more and more about noticing what is already here.',
    content: `There is a particular kind of morning that begins before you are ready. The kettle clicks, your inbox has opinions, and the day is already asking for a version of you that has not had a moment to arrive yet.\n\nI started leaving a small pocket of quiet between waking up and picking up my phone. Nothing impressive: opening a window, making tea, reading a page of a book. The ritual is almost too small to count, which is exactly why it works.\n\nA good routine does not need to turn you into a better person. Sometimes it just gives you a softer place to begin.`,
    category: 'Slow living',
    date: 'October 18, 2025',
    readTime: '4 min read',
    author: 'Mara Ellis',
    initials: 'ME',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1400&q=85',
  },
  {
    id: 'the-art-of-looking-closely',
    title: 'The art of looking a little closer',
    excerpt: 'On the ordinary details that make an ordinary day feel like a place worth living in.',
    content: `Attention is a kind of generosity. Give it to the light moving across the kitchen wall, to the neighbor who remembers your name, to the little green thing pushing through a crack in the pavement.\n\nWe spend so much time waiting for a life that feels interesting that we miss the small details already making it so. Looking closer is not a trick for making every day beautiful. It is simply a way of being here for the day you have.\n\nTry noticing one thing today that you would normally pass by. That is enough to begin.`,
    category: 'Perspective',
    date: 'October 12, 2025',
    readTime: '3 min read',
    author: 'Theo Park',
    initials: 'TP',
    image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'make-room-for-the-messy-first-draft',
    title: 'Make room for the messy first draft',
    excerpt: 'Good ideas rarely arrive fully formed. A reminder to let the beginning be a beginning.',
    content: `A blank page can make a simple idea feel like a test. We want the right words before we have written any, and the tidy ending before we have earned it. But the first version is not the finished thing. It is the way into the finished thing.\n\nWrite the clumsy sentence. Make the lopsided sketch. Put the ingredients together and taste as you go. The work gets clearer by being worked on, not by being thought about from a safe distance.\n\nLet the first draft be bad company for a little while. It will introduce you to something better.`,
    category: 'Creativity',
    date: 'October 6, 2025',
    readTime: '5 min read',
    author: 'Mara Ellis',
    initials: 'ME',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'a-note-on-starting-again',
    title: 'A note on starting again',
    excerpt: 'You are allowed to begin again without turning the last attempt into a failure.',
    content: `Some plans run their course. Some seasons ask for a different pace. Starting again can feel like admitting you got it wrong, but sometimes it is just a way of listening more carefully to what you need now.\n\nYou do not have to explain the new beginning to the old version of yourself. Take what you learned, leave what no longer fits, and make the next small move.\n\nA fresh start can be quiet. It can look like showing up a little differently tomorrow.`,
    category: 'Notes',
    date: 'September 29, 2025',
    readTime: '3 min read',
    author: 'Theo Park',
    initials: 'TP',
    image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1000&q=85',
  },
]

export function PostsProvider({ children }) {
  const [posts, setPosts] = useState(initialPosts)

  const value = useMemo(
    () => ({
      posts,
      addPost: ({ title, content }) => {
        const newPost = {
          id: globalThis.crypto.randomUUID(),
          title,
          excerpt: content.trim().split(/\s+/).slice(0, 24).join(' ') + '…',
          content,
          category: 'Community',
          date: new Intl.DateTimeFormat('en', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          }).format(new Date()),
          readTime: `${Math.max(1, Math.ceil(content.trim().split(/\s+/).length / 200))} min read`,
          author: 'You',
          initials: 'YO',
          image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1000&q=85',
        }

        setPosts((currentPosts) => [newPost, ...currentPosts])
        return newPost
      },
    }),
    [posts],
  )

  return <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
}
