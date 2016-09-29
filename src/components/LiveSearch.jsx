import React from 'react'
import LiveSearchForm from './LiveSearchForm'
import LiveSearchResults from './LiveSearchResults'

export default React.createClass({
    getInitialState: function() {
        return {
            searchResults: []
        };
    },
    handleFormChange: function(strSearch) {

        var equalNome = function(item) {
            return item[this.props.searchKey].toLowerCase().search( strSearch.toLowerCase() ) != -1;
        }.bind(this);

        this.setState({
            searchResults: strSearch ? this.props.data.filter(equalNome).slice(0, 5) : []
        });
    },
    render: function() {
        return (
            <div className="form-group">
                <LiveSearchForm onChange={ this.handleFormChange } />
                <LiveSearchResults showKey={ this.props.viewKey } results={ this.state.searchResults } />
            </div>
        );
    }
});