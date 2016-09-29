import React from 'react'

export default React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired
    },
    render: function() {
        return (
            <a href="#" className="list-group-item borderless"> { this.props.title } </a>
        );
    }
});