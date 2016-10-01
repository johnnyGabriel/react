import React from 'react'
import Post from './Post'

export default React.createClass({
    propTypes: {
        posts: React.PropTypes.array.isRequired
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