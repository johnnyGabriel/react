import React from 'react'
import CompraForm from './CompraForm'
import CompraLista from './CompraLista'

const { string, array } = React.PropTypes

export default React.createClass({
    propTypes: {
        titulo: string,
        subtitulo: string,
        produtos: array.isRequired
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