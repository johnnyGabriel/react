import React from 'react'
import SideMenu from '../components/SideMenu'

import menuItems from '../menu'

const ReactComponentsApp = React.createClass({
    render() {
        return (
            <div className="jumbotron">
                <div className="container">
                    <div className="col-md-2">
                        <SideMenu items={ menuItems } />
                    </div>
                    <div className="col-md-offset-1 col-md-9">
                        { this.props.children }
                    </div>
                </div>
            </div>
        )
    }
})

export default ReactComponentsApp