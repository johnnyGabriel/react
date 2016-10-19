import React from 'react'

const { number, string } = React.PropTypes

export default React.createClass({
    propTypes: {
        id: number.isRequired,
        nome: string.isRequired
    },
    render() {
        return (
            <option value={ this.props.id }>
                { this.props.nome }
            </option>
        );
    }
});