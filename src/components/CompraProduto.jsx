import React from 'react'

export default React.createClass({
    propTypes: {
        id: React.PropTypes.number.isRequired,
        nome: React.PropTypes.string.isRequired
    },
    render() {
        return (
            <option value={ this.props.id }>
                { this.props.nome }
            </option>
        );
    }
});