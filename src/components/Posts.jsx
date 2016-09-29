import {get} from 'jquery'
import React from 'react'
import PostsHeader from './PostsHeader'
import PostsList from './PostsList'

export default React.createClass({
    propTypes: {
        endpoint: React.PropTypes.string.isRequired
    },
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
                <PostsHeader title="Postagens" subtitle="mais recentes" />
                { this.state.isLoading ? <h4>Carregando...</h4> : null }
                { this.state.isFail ? <h4>Não foi possível buscar as postagens</h4> : null }
                <PostsList posts={this.state.posts} />
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

        this.request = get(this.props.endpoint)
            .done(success.bind(this))
            .fail(fail.bind(this));
    }
});