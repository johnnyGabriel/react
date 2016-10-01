import React from 'react'

export default React.createClass({
    propTypes: {
        title: React.PropTypes.string,
        subtitle: React.PropTypes.string
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