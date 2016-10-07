import React from 'react'

export default React.createClass({
    propTypes: {
        index: React.PropTypes.number,
        title: React.PropTypes.string.isRequired,
        selected: React.PropTypes.bool,
        onSelect: React.PropTypes.func
    },
    getDefaultProps() {
        return { onClick: () => 0 }
    },
    render() {
        return (
            <a
                href="javascript:void(0)"
                className={ "list-group-item borderless" + ( this.props.selected ? " search-item-selected" : "" ) }
                data-index={ this.props.index }
                onClick={ this.props.onSelect }>
                { this.props.title }
            </a>
        );
    }
});