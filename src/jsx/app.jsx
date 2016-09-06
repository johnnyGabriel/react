var PostList = React.createClass({
    render: function() {
        var post = function(val) {
            return (
                <div className="col-md-12" key={val.id}>
                    <h3>{val.title}</h3>
                    <p>{val.body}</p>
                </div>
            );
        };
        return <div>{this.props.posts.map(post)}</div>;
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
        this.request = $.get(this.props.endpoint, function(posts) {
            this.setState({
                posts: posts,
                isLoading: false
            });
        }.bind(this));
    },
    componentDidUnmount: function() {
        this.request.abort();
    },
    render: function() {
        return (
            <div>
                { this.state.isLoading ? <h4>Carregando...</h4> : null }
                <PostList posts={this.state.posts} />
            </div>
        );
    }
});

ReactDOM.render(
    <PostApp endpoint="http://jsonplaceholder.typicode.com/posts" />,
    document.getElementById('content')
);