import React, { Component } from 'react'

class CompLifeCycleComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             color:"red"
        }
    }
    static getDerivedStateFromProps(props){
        return{
            color:props.newColor
        }
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState((prevState)=>({color:"Yellow"}))
        },2000)
    }
    
    render() {
        return (
            <div>
                <h2>This is Component Life Cycle Component</h2>
                <p>Color is : {this.props.color}</p>
            </div>
        )
    }
}

export default CompLifeCycleComp
