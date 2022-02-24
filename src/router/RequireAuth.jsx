import useAmplifyAuth from '@src/hooks/useAmplifyAuth'
import { Navigate, useLocation } from 'react-router'

function RequireAuth({ children }) {
  const location = useLocation()

  const { isLoading, isError, user } = useAmplifyAuth()

  if (!isLoading && !user) {
    return <Navigate to={'/signin'} state={{ from: location }} replace={true} />
  }

  if (isError) {
    console.error('authentication failed')
  }

  return children
}

export default RequireAuth
