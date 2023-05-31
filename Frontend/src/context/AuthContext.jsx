import { createContext, useContext, useState } from 'react'

export const UserContext = createContext()

export const useAuth = () => {
  const context = useContext(UserContext)
  if (!context) throw Error('useAuth must be used within a provider')
  return context
}

export const AuthContext = ({ children }) => {
  const [user, setUser] = useState(false)

  const login = () => {
    setUser(true)
  }

  const signup = (email, password) => {
    return setUser({ email, password })
  }

  const logout = () => {
    return setUser(false)
  }

  return (
    <UserContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </UserContext.Provider>
  )
}