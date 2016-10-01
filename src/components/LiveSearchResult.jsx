import React from 'react'

export default React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
        onSelect: React.PropTypes.func
    },
    getDefaultProps() {
        return { onClick: (0) }
    },
    render() {
        return (
            <a
                href="javascript:void(0)"
                className="list-group-item borderless"
                data-id={ this.props.id }
                onClick={ this.props.onSelect }>
                { this.props.title }
            </a>
        );
    }
});