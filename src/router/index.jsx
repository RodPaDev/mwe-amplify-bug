import { useRoutes } from 'react-router'
import { routesTree } from './routes'

const Routes = () => {
  const route = useRoutes(routesTree)
  return route
}

export default Routes
