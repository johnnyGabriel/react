import React from 'react'

export default React.createClass({
    propTypes: {
        onChange: React.PropTypes.func
    },
    getDefaultProps() {
        return {
            onChange: (0)
        }
    },
    handleKeyUp(ev) {

        var value = ev.target.value;
        this.props.onChange(value);

    },
    render() {
        return (
            <input
                className="form-control borderless"
                placeholder="Pesquise pelo nome"
                onKeyUp={ this.handleKeyUp } />
        );
    }
});