import React from 'react'

export default React.createClass({
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