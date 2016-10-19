import React from 'react'

const { string } = React.PropTypes

export default React.createClass({
    propTypes: {
        title: string,
        subtitle: string
    },
    render() {
        return (
            <div className="page-header">
                <h1> { this.props.title }
                    <small> { this.props.subtitle }</small>
                </h1>  
            </div>
        );
    }
});