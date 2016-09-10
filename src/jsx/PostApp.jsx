var PostItem = React.createClass({
    render: function() {
        return (
            <a href="#" className="list-group-item">
                <h4 className="list-group-item-heading">{ this.props.post.title }</h4>
                <p className="list-group-item-text">{ this.props.post.body }</p>
            </a>
        );
    }
});

var PostList = React.createClass({
    postItem: function(post) {
        return <PostItem post={post} key={post.id}/>;
    },
    render: function() {
        return (
            <div className="list-group">
                { this.props.posts.map(this.postItem) }
            </div>
        );
    }
});

var PostHeader = React.createClass({
    render: function() {
        return (
            <div className="page-header">
                <h1> { this.props.title }
                <small> { this.props.subtitle }</small>
                </h1>  
            </div>
        );
    }
});

var PostApp = React.createClass({
    getInitialState: function() {
        return {
            posts: [],
            isLoading: true
        };
    },
    componentDidMount: function() {
        this.requestPosts();
        this.interval = setInterval(this.requestPosts, 3000);
    },
    componentWillUnmount: function() {
        this.request.abort();
        clearInterval(this.interval);
    },
    render: function() {
        return (
            <div>
                <PostHeader title="Postagens" subtitle="mais recentes" />
                { this.state.isLoading ? <h4>Carregando...</h4> : null }
                <PostList posts={this.state.posts} />
            </div>
        );
    },
    requestPosts: function() {
        this.request = $.get(this.props.endpoint, function(posts) {
            this.setState({
                posts: posts,
                isLoading: false
            });
        }.bind(this));
    }
});

ReactDOM.render(
    <PostApp endpoint="http://jsonplaceholder.typicode.com/posts" />,
    document.getElementById('content')
);