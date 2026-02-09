import React, { Component } from 'react'
import HOCComp from './HOCComp'

class ClickCounterComp extends Component {
    render() {
        return (
            <div>
                <h2>This is Click Counter Component</h2>
                <p>Count : <strong>{this.props.count}</strong></p>
                <button type='button' onClick={this.props.increement}>Increement Counter</button>
                <button type='button' onClick={this.props.decreement}>Decreement Counter</button>

            </div>
        )
    }
}

export default HOCComp(ClickCounterComp)
