import React from 'react'
import LiveSearch from '../components/LiveSearch'
import produtos from '../produtos'

export default () => (
    <div>
        <h1>LiveSearch</h1>
        <p>Digite o nome de um produto. Ex. arroz</p>
        <LiveSearch 
            searchKey="nome"
            viewKey="nome"
            data={ produtos }
            onSelect={ console.log } />
    </div>
)