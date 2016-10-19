import React from 'react'

const { number, string, bool, func } = React.PropTypes

export default React.createClass({
    propTypes: {
        index: number,
        title: string.isRequired,
        selected: bool,
        onSelect: func
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