import React from 'react'
import CompraListaItem from './CompraListaItem'

export default React.createClass({
    render: function() {
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
                    { !this.props.carrinho.length ? (
                        <tr>
                            <td colSpan="5" className="text-center">
                                Carrinho vazio   
                            </td>
                        </tr>) : null }
                    { this.props.carrinho.map(function(produto, index) {
                        return <CompraListaItem key={ index } produto={ produto } />;
                    }) }
                    <tr>
                        <td colSpan="4" className="text-right">Total</td>
                        <td> R$ { this.calcTotal().toFixed(2) } </td>
                    </tr>
                </tbody>
                </table>
            </div>
        );
    },
    calcTotal: function() {
        return this.props.carrinho.reduce(function(total, produto) {
            return total + (produto.valor * produto.qtt)
        }, 0);
    }
});