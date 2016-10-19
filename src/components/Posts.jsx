import { get } from 'jquery'
import React from 'react'
import PostsHeader from './PostsHeader'
import PostsList from './PostsList'

const { string } = React.PropTypes

export default React.createClass({
    propTypes: {
        endpoint: string.isRequired
    },
    getInitialState() {
        return {
            posts: [],
            isLoading: true,
            isFail: false
        };
    },
    componentDidMount() {
        this.requestPosts();
        this.interval = setInterval(this.requestPosts, 5000);
    },
    componentWillUnmount() {
        this.request.abort();
        clearInterval(this.interval);
    },
    render() {

        const stt = this.state
        const renderLoad = () => <h4>Carregando...</h4>
        const renderFail = () => <h4>Não foi possível buscar as postagens!</h4>

        return (
            <div>
                <PostsHeader title="Postagens" subtitle="mais recentes" />
                { stt.isLoading ? renderLoad() : null }
                { stt.isFail ? renderFail() : null }
                <PostsList posts={stt.posts} />
            </div>
        );

    },
    requestPosts() {

        const success = (posts) => 
            this.setState({
                posts: posts,
                isLoading: false,
                isFail: false
            })

        const fail = () =>
            this.setState({
                posts: [],
                isLoading: false,
                isFail: true
            })

        this.setState( { isLoading: true } );

        this.request = get(this.props.endpoint)
            .done(success.bind(this))
            .fail(fail.bind(this));
    }
});