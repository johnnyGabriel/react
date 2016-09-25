var LiveSearchResult = React.createClass({
    render: function() {
        return (
            <a href="#" className="list-group-item borderless"> { this.props.title } </a>
        );
    }
});

var LiveSearchResults = React.createClass({
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

var LiveSearchForm = React.createClass({
    handleKeyUp: function(ev) {

        var value = ev.target.value;
        this.props.onChange(value);

    },
    render: function() {
        return (
            <input
                className="form-control borderless"
                placeholder="Pesquise pelo nome"
                onKeyUp={ this.handleKeyUp } />
        );
    }
});

var LiveSearch = React.createClass({
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