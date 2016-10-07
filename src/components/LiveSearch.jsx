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
        return { onSelect: () => 0 }
    },
    getInitialState() {
        return {
            searchResults: [],
            listSelected: 0
        }
    },
    render() {
        return (
            <div className="form-group">
                <LiveSearchForm
                    ref={ 'input' }
                    value={ this.props.initialValue }
                    onType={ this.handleType }
                    onArrowKey={ this.handleArrowKey }
                    onEnter={ this.handleEnter } />
                <LiveSearchResults
                    showKey={ this.props.viewKey }
                    results={ this.state.searchResults }
                    selected={ this.state.listSelected }
                    onSelect={ this.handleListSelection } />
            </div>
        );
    },
    handleType(strSearch) {

        const searchIn = (str1, str2) => {
            var str1 = str1.toLowerCase(),
                str2 = str2.toLowerCase();
            return str1.search(str2) != -1;
        }

        const filterByPropSearch = ( array, prop, searchArg ) =>
            array.filter( el => searchIn( el[prop], searchArg ) )

        var results = []

        if (strSearch)
            results = filterByPropSearch( this.props.data, this.props.searchKey, strSearch )

        this.setState({
            searchResults: results.slice(0, 5),
            listSelected: 0
        })

    },
    handleArrowKey(direction) {

        var selected = this.state.listSelected,
            length = this.state.searchResults.length -1

        if (length < 0)
            return false

        switch (direction) {
            case 'up':
                selected = ( selected <= 0 ? 0 : --selected )
                break
            case 'down':
                selected = ( selected >= length ? length : ++selected )
                break
        }

        this.setState( { listSelected: selected } );

    },
    handleEnter() {

        var item = this.state.searchResults[ this.state.listSelected ]
        if (!item) return false
        this.triggerSelect( item )

    },
    handleListSelection(index) {

        var item = this.state.searchResults[ index ]
        if (!item) return false
        this.triggerSelect( item )

    },
    triggerSelect(selected) {

        this.props.onSelect( selected )
        this.setState( this.getInitialState )
        this.refs.input.overwrite('')

    }

});