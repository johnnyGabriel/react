import React from 'react'
import LiveSearchResult from './LiveSearchResult'

export default React.createClass({
    propTypes: {
        showKey: React.PropTypes.string.isRequired,
        results: React.PropTypes.array.isRequired
    },
    mapResults: function() {
        return this.props.results.map(function(result) {
            return <LiveSearchResult key={ result.id } title={ result[this.props.showKey] } />;
        }.bind(this));
    },
    render: function() {
        return (
            <div className="search-results-container">
                <div className="list-group search-results">
                    { this.mapResults() }
                </div>
            </div>
        );
    }
});