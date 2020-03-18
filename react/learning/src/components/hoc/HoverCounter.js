import React, { Component } from 'react'
import UpdatedComponent from './CounterHOC'

 class HoverCounter extends Component {
    

    render() {
        const {count , increamentcount}=this.props
        return (
            <div>
                <p onMouseOver={increamentcount}> Hovered {count} times</p>
            </div>
        )
    }
}

export default UpdatedComponent(HoverCounter)
