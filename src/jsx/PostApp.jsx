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
            isLoading: true,
            isFail: false
        };
    },
    componentDidMount: function() {
        this.requestPosts();
        this.interval = setInterval(this.requestPosts, 5000);
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
                { this.state.isFail ? <h4>Não foi possível buscar as postagens</h4> : null }
                <PostList posts={this.state.posts} />
            </div>
        );
    },
    requestPosts: function() {

        function success(posts) {
            this.setState({
                posts: posts,
                isLoading: false,
                isFail: false
            });
        }

        function fail() {
            this.setState({
                posts: [],
                isLoading: false,
                isFail: true
            });
        }

        this.setState({
            isLoading: true
        });

        this.request = $.get(this.props.endpoint)
            .done(success.bind(this))
            .fail(fail.bind(this));
    }
});