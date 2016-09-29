import React from 'react'

export default React.createClass({
    render: function() {
        return (
            <a href="#" className="list-group-item">
                <h4 className="list-group-item-heading">{ this.props.post.title }</h4>
                <p className="list-group-item-text">{ this.props.post.body }</p>
            </a>
        );
    }
});