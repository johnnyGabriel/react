import React from 'react'
import CompraForm from './CompraForm'
import CompraLista from './CompraLista'

export default React.createClass({
    propTypes: {
        titulo: React.PropTypes.string,
        subtitulo: React.PropTypes.string,
        produtos: React.PropTypes.array.isRequired
    },
    getInitialState() {
        return {
            carrinho: []
        }
    },
    render() {
        return (
            <div>
                <h1>{ this.props.titulo }</h1>
                <p>{ this.props.subtitulo }</p>
                <div>
                    <CompraForm
                        produtos={ this.props.produtos }
                        onChange={ this.handleFormChange } />
                    <CompraLista carrinho={ this.state.carrinho } />
                </div>
            </div>
        );
    },
    handleFormChange(carrinho) {
        this.setState({ carrinho: carrinho });
    }
});