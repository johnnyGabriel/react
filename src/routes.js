import ReactComponentsApp from './containers/ReactComponentsApp'
import Home from './components/Home'
import Posts from './containers/Posts'
import Compras from './containers/Compras'
import LiveSearch from './containers/LiveSearch'
import RouteError from './components/RouteError'

export default {
    path: '/',
    component: ReactComponentsApp,
    indexRoute: { component: Home },
    childRoutes: [
        { path: 'posts', component: Posts },
        { path: 'compras', component: Compras },
        { path: 'livesearch', component: LiveSearch },
        { path: '*', onEnter(nextState, replace) { replace('/') }}
    ]
}