import React from 'react'
import CompraListaItem from './CompraListaItem'

const { array } = React.PropTypes

export default React.createClass({
    propTypes: {
        carrinho: array.isRequired
    },
    render() {

        const empty = () => (
            <tr>
                <td colSpan="5" className="text-center"> Carrinho vazio </td>
            </tr>
        ) 

        return (
            <div className="table-responsive">
                <table className="table table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Valor Unit.</th>
                        <th>Quantidade</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    { !this.props.carrinho.length ? empty() : null }
                    { this.mapCarrinho(this.props.carrinho) }
                    <tr>
                        <td colSpan="4" className="text-right">Total</td>
                        <td>
                            R$ { this.calcTotal(this.props.carrinho) }
                        </td>
                    </tr>
                </tbody>
                </table>
            </div>
        )
    },
    mapCarrinho(carrinho) {
        return carrinho.map((produto, index) =>
            <CompraListaItem key={ index } produto={ produto } />
        )
    },
    calcTotal(carrinho) {
        return carrinho.reduce((total, produto) =>
            total + (produto.valor * produto.qtt)
        , 0).toFixed(2);
    }
});