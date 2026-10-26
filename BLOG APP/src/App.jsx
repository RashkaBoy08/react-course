import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './context/AuthProvider.jsx'
import { useAuth } from './context/useAuth.jsx'
import { PostsProvider } from './context/PostsProvider.jsx'
import CreatePost from './components/CreatePost.jsx'
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import NotFound from './components/NotFound.jsx'
import PostDetail from './components/PostDetail.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'

function PageLayout() {
  const { isAuthenticated, user, logout } = useAuth()

  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <header className="border-b border-line bg-paper">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          <Link to="/" className="group flex items-center gap-2" aria-label="Draft home">
            <span className="font-sans text-[21px] font-extrabold tracking-[-0.09em] sm:text-2xl">
              DRAFT<span className="text-moss">.</span>
            </span>
            <span className="hidden border-l border-line pl-2 text-[9px] font-semibold uppercase leading-tight tracking-[0.13em] text-muted sm:block">
              Stories for<br />curious minds
            </span>
          </Link>

          <nav className="flex items-center gap-3 text-xs font-semibold sm:gap-8 sm:text-sm" aria-label="Main navigation">
            <Link className="hidden text-muted transition-colors hover:text-ink sm:inline" to="/">
              The journal
            </Link>
            {isAuthenticated ? (
              <>
                <Link
                  className="rounded-md bg-moss px-3 py-2.5 text-[10px] font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-ink sm:px-5 sm:text-xs"
                  to="/create"
                >
                  Write a story <span aria-hidden="true">↗</span>
                </Link>
                <button
                  className="grid size-9 place-items-center rounded-full bg-surface text-xs font-bold text-ink transition-colors hover:bg-lime"
                  type="button"
                  onClick={logout}
                  title={`Log out ${user.name}`}
                  aria-label={`Log out ${user.name}`}
                >
                  {user.name.charAt(0).toUpperCase()}
                </button>
              </>
            ) : (
              <Link className="rounded-md border border-line px-3 py-2 text-[10px] font-bold uppercase tracking-[0.08em] transition-colors hover:border-moss hover:text-moss sm:px-4 sm:text-xs" to="/login">
                Log in <span aria-hidden="true">↗</span>
              </Link>
            )}
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-7xl flex-1 px-5 sm:px-8 lg:px-12">
        <Outlet />
      </main>

      <footer className="mt-20 border-t border-line bg-surface">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-7 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <span>Thoughtful writing, one story at a time.</span>
          <span>Made for curious minds. <span className="text-moss">✳</span></span>
        </div>
      </footer>
    </div>
  )
}

function AppRoutes() {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route index element={<Home />} />
        <Route path="posts/:postId" element={<PostDetail />} />
        <Route
          path="create"
          element={
            <ProtectedRoute>
              <CreatePost />
            </ProtectedRoute>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <PostsProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </PostsProvider>
    </AuthProvider>
  )
}
