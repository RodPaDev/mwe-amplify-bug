import RequireAuth from './RequireAuth'

/** Non Lazy Imports */
import App from '@src/App'
import SignUp from '@src/components/Auth/SignUp'
import SignIn from '@src/components/Auth/SignIn'

export const routesTree = [
  {
    element: (
      <RequireAuth>
        <App />
      </RequireAuth>
    ),
    path: '/',
    children: []
  },
  {
    element: <SignUp />,
    path: '/signUp'
  },
  {
    element: <SignIn />,
    path: '/signIn'
  }
]
