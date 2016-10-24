import React from 'react'
import Compra from '../components/Compra'
import produtos from '../produtos'

export default () =>
    <Compra
        titulo="Compras"
        subtitulo="Selecione os produtos que deseja levar"
        produtos={ produtos } />