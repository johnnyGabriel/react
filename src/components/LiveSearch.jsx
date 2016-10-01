import React from 'react'
import LiveSearchForm from './LiveSearchForm'
import LiveSearchResults from './LiveSearchResults'

export default React.createClass({
    propTypes: {
        searchKey: React.PropTypes.string.isRequired,
        viewKey: React.PropTypes.string.isRequired,
        data: React.PropTypes.array.isRequired
    },
    getInitialState() {
        return { searchResults: [] }
    },
    handleFormChange(strSearch) {

        var equalNome = ((item) =>
            item[this.props.searchKey].toLowerCase().search( strSearch.toLowerCase() ) != -1
        )

        this.setState({
            searchResults: strSearch ? this.props.data.filter(equalNome).slice(0, 5) : []
        });
    },
    render() {
        return (
            <div className="form-group">
                <LiveSearchForm onChange={ this.handleFormChange } />
                <LiveSearchResults showKey={ this.props.viewKey } results={ this.state.searchResults } />
            </div>
        );
    }
});