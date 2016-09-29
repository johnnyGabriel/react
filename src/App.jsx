import React from 'react'
import ReactDOM from 'react-dom'
import LiveSearch from './components/LiveSearch'
import Compra from './components/Compra'
import Posts from './components/Posts'
import produtos from './data'

ReactDOM.render(
    // <Compra
    //     titulo="Compras"
    //     subtitulo="Selecione os produtos que deseja levar"
    //     produtos={produtos} />,
    <Posts endpoint="http://jsonplaceholder.typicode.com/posts" />,
    // <LiveSearch 
    //     searchKey="nome"
    //     viewKey="nome"
    //     data={produtos} />,
    document.getElementById('content')
);