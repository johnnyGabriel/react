import React from 'react'
import CompraForm from './CompraForm'
import CompraLista from './CompraLista'

export default React.createClass({
    getInitialState: function() {
        return {
            carrinho: []
        }
    },
    render: function() {
        return (
            <div>
                <h1>{ this.props.titulo }</h1>
                <p>{ this.props.subtitulo }</p>
                <div>
                    <CompraForm produtos={ this.props.produtos } onChange={ this.handleFormChange } />
                    <CompraLista carrinho={ this.state.carrinho } />
                </div>
            </div>
        );
    },
    handleFormChange: function(carrinho) {
        this.setState({ carrinho: carrinho });
    }
});