import React from 'react'

export default React.createClass({
    propTypes: {
        value: React.PropTypes.string,
        onType: React.PropTypes.func,
        onEnter: React.PropTypes.func,
        onArrowKey: React.PropTypes.func
    },
    getDefaultProps() {
        return {
            onType: () => 0,
            onEnter: () => 0,
            onArrowKey: () => 0
        }
    },
    getInitialState() {
        return { value: '' };
    },
    componentDidMount() {
        if (this.props.value)
            this.overwrite( this.props.value )
    },
    render() {
        return (
            <input
                className="form-control borderless"
                placeholder="Pesquise pelo nome"
                value={ this.state.value }
                onChange={ this.handleChange }
                onKeyDown={ this.handleKeyDown }
                onKeyUp={ this.handleKeyUp } />
        );
    },
    handleChange(event) {
        this.setState( { value: event.target.value } );
    },
    handleKeyUp(event) {

        const pointerPosition = (target, pos) => {
            target.selectionStart = pos
        }

        switch (event.keyCode) {
            case 38:
                pointerPosition( event.target, event.target.value.length )
                this.props.onArrowKey('up')
                break
            case 40:
                pointerPosition( event.target, event.target.value.length )
                this.props.onArrowKey('down')
                break
            case 13:
                this.props.onEnter()
                break
            default:
                this.props.onType( event.target.value )
                break
        }

    },
    overwrite(newValue) {
        this.setState( { value: newValue } );
        this.props.onType( newValue );
    }
});