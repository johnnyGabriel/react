import React from 'react'
import Post from './Post'

const { array } = React.PropTypes

export default React.createClass({
    propTypes: {
        posts: array.isRequired
    },
    postItem(post) {
        return <Post post={post} key={post.id}/>;
    },
    render() {
        return (
            <div className="list-group">
                { this.props.posts.map(this.postItem) }
            </div>
        );
    }
});