import React from 'react'

export default React.createClass({
    render: function() {
        return (
            <option value={ this.props.id }>
                { this.props.nome }
            </option>
        );
    }
});