import React from 'react'
import Post from './Post'

export default React.createClass({
    postItem: function(post) {
        return <Post post={post} key={post.id}/>;
    },
    render: function() {
        return (
            <div className="list-group">
                { this.props.posts.map(this.postItem) }
            </div>
        );
    }
});