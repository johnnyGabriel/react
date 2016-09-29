import React from 'react'

export default React.createClass({
    propTypes: {
        onChange: React.PropTypes.func
    },
    getDefaultProps: function() {
        return {
            onChange: function() {}
        }
    },
    handleKeyUp: function(ev) {

        var value = ev.target.value;
        this.props.onChange(value);

    },
    render: function() {
        return (
            <input
                className="form-control borderless"
                placeholder="Pesquise pelo nome"
                onKeyUp={ this.handleKeyUp } />
        );
    }
});