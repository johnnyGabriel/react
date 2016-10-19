import React from 'react'

const { object } = React.PropTypes

export default React.createClass({
    propTypes: {
        post: object.isRequired
    },
    render() {
        return (
            <a href="#" className="list-group-item">
                <h4 className="list-group-item-heading">{ this.props.post.title }</h4>
                <p className="list-group-item-text">{ this.props.post.body }</p>
            </a>
        );
    }
});