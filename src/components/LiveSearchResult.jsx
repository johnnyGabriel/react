import React from 'react'

export default React.createClass({
    render: function() {
        return (
            <a href="#" className="list-group-item borderless"> { this.props.title } </a>
        );
    }
});