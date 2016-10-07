import React from 'react'
import LiveSearchResult from './LiveSearchResult'

export default React.createClass({
    propTypes: {
        showKey: React.PropTypes.string.isRequired,
        results: React.PropTypes.array.isRequired,
        selected: React.PropTypes.number,
        onSelect: React.PropTypes.func
    },
    getDefaultProps() {
        return { onSelect: () => 0 }
    },
    mapResults() {
        return this.props.results.map( (result, index) =>
            <LiveSearchResult
                key={ result.id }
                index={ index }
                title={ result[this.props.showKey] }
                selected={ index == this.props.selected }
                onSelect={ this.handleSelect } />
        )
    },
    render() {
        return (
            <div className="search-results-container">
                <div className="list-group search-results">
                    { this.mapResults() }
                </div>
            </div>
        );
    },
    handleSelect(event) {
        this.props.onSelect( event.target.dataset.index );
    }
});