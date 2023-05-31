import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const ProtectedRoute = ({ children }) => {
  const { user } = useSelector(state=>state.auth)
const navegate = useNavigate()
  useEffect(() => {
    console.log(user)
    if (!user) {
      navegate('/login')
    }
  }, [user])


  return <>{children}</>
}