import React from 'react'
import LiveSearchForm from './LiveSearchForm'
import LiveSearchResults from './LiveSearchResults'

export default React.createClass({
    propTypes: {
        initialValue: React.PropTypes.string,
        searchKey: React.PropTypes.string.isRequired,
        viewKey: React.PropTypes.string.isRequired,
        data: React.PropTypes.array.isRequired,
        onSelect: React.PropTypes.func
    },
    getDefaultProps() {
        return { onSelect: (0) }
    },
    getInitialState() {
        return { searchResults: [] }
    },
    componentDidMount() {

        if (this.props.initialValue)
            this.refs.input.override( this.props.initialValue );

    },
    handleFormChange(strSearch) {

        const searchIn = (str1, str2) => {
            var str1 = str1.toLowerCase(),
                str2 = str2.toLowerCase();
            return str1.search(str2) != -1;
        }

        const filterByPropSearch = (
            array =>
                prop =>
                    string =>
                        array.filter( el => searchIn( el[prop], string ) )
        );

        var results = [];

        if (strSearch)
            results = filterByPropSearch(this.props.data)(this.props.searchKey)(strSearch);

        this.setState( { searchResults: results.slice(0, 5) } );

    },
    handleListSelection(resultId) {

        var findById = id => array => array.find( el => el.id == id )
        this.props.onSelect( findById( resultId )( this.state.searchResults ) );
        this.setState( this.getInitialState );
        this.refs.input.override('');

    },
    render() {
        return (
            <div className="form-group">
                <LiveSearchForm onKeyUp={ this.handleFormChange } ref={ 'input' } />
                <LiveSearchResults
                    showKey={ this.props.viewKey }
                    results={ this.state.searchResults }
                    onSelect={ this.handleListSelection } />
            </div>
        );
    }
});