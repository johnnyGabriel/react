import React from 'react'
import Link from 'react-router/lib/Link'

const { array } = React.PropTypes

const SideMenu = React.createClass({

    propTypes: { items: array },

    getDefaultProps() {
        return { items: [] }
    },

    render() {

        const render = ( item ) =>
            <Link
                key={ item.id }
                to={ item.link }
                title={ item.desc }
                className="list-group-item"
                activeClassName="active"
                onlyActiveOnIndex>{ item.nome }</Link>

        return (
            <div className="list-group">
                { this.props.items.map( render ) }
            </div>
        )

    }
})

export default SideMenu