import { useMemo, useState } from 'react'
import { AuthContext } from './AuthContext.jsx'

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      login: (details) => setUser(details),
      logout: () => setUser(null),
    }),
    [user],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
