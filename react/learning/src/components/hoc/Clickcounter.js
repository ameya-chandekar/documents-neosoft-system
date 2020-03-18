import React, { Component } from 'react'
import UpdatedComponent from './CounterHOC'
 class Clickcounter extends Component {
   
    render() {
        const {count ,increamentcount} =this.props
        return (
            <div>
                <p onClick={increamentcount}>clicked {count}times</p>
            </div>
        )
    }
}

export default UpdatedComponent(Clickcounter)
