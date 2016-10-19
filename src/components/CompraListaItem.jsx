import React from 'react'

const { object } = React.PropTypes

export default React.createClass({
    propTypes: {
        produto: object.isRequired
    },
    render() {
        return (
            <tr>
                <td> { this.props.produto.id } </td>
                <td> { this.props.produto.nome } </td>
                <td>
                    R$ { this.props.produto.valor.toFixed(2) }
                </td>
                <td> { this.props.produto.qtt } </td>
                <td>
                    R$ { (this.props.produto.valor * this.props.produto.qtt).toFixed(2) }
                </td>
            </tr>
        );
    }
});