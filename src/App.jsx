import React from 'react'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'
import { render } from 'react-dom'
import LiveSearch from './components/LiveSearch'
import Compra from './components/Compra'
import Posts from './components/Posts'
import produtos from './data'

const App = React.createClass({
    render() {
        return (
            <div className="jumbotron">
                <div className="container">
                    <div className="col-md-offset-2 col-md-8">
                        { this.props.children }
                    </div>
                </div>
            </div>
        )
    }
})

const Erro = React.createClass({
    render() {
        return <h2> Não encontrado! </h2>
    }
})

const LiveSearchApp = () =>
    <LiveSearch 
        searchKey="nome"
        viewKey="nome"
        data={ produtos }
        onSelect={ console.log } />

const PostsApp = () =>
    <Posts endpoint="http://jsonplaceholder.typicode.com/posts" />

const CompraApp = () =>
    <Compra
        titulo="Compras"
        subtitulo="Selecione os produtos que deseja levar"
        produtos={ produtos } />

const routes = {
    path: '/',
    component: App,
    childRoutes: [
        { path: 'posts', component: PostsApp },
        { path: 'compras', component: CompraApp },
        { path: 'livesearch', component: LiveSearchApp },
        { path: '*', component: Erro }
    ]
}

render(<Router history={ browserHistory } routes={ routes } />, document.body)