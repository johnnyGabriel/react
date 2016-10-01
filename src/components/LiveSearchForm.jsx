import React from 'react'

export default React.createClass({
    propTypes: {
        onKeyUp: React.PropTypes.func
    },
    getDefaultProps() {
        return { onKeyUp: (0) }
    },
    getInitialState() {
        return { value: '' };
    },
    handleChange(event) {
        this.setState( { value: event.target.value } );
    },
    handleKeyUp(event) {
        this.props.onKeyUp( event.target.value );
    },
    render() {
        return (
            <input
                className="form-control borderless"
                placeholder="Pesquise pelo nome"
                value={ this.state.value }
                onChange={ this.handleChange }
                onKeyUp={ this.handleKeyUp } />
        );
    },
    override(newValue) {
        this.setState( { value: newValue } );
        this.props.onKeyUp( newValue );
    }
});