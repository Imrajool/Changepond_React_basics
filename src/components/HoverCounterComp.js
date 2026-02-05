import React, { Component } from 'react'
import HOCComp from './HOCComp'

class HoverCounterComp extends Component {
    render() {
        return (
            <div>
                <h2>This is Hover Counter Component</h2>
                <p>Count : <strong>{this.props.count}</strong></p>
                <button type='button' onMouseOver={()=> this.props.updateState()}>Mouse hover on me to increement</button>
            </div>
        )
    }
}

export default HOCComp(HoverCounterComp)
