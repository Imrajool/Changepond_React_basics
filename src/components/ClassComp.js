
import React, { Component } from "react";

class ClassComp extends Component{
        render(){
        return(
            <div>
                <h3>This is Class Component</h3>
                <p>My name is <strong>{this.props.ename}</strong></p>
            </div>
        )
    }
}


export default ClassComp;