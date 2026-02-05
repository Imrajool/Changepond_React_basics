import { Component } from "react";


class ErrorBoundaryComp extends Component{
    constructor(props){
        super(props)
        this.state ={
            isCond : false
        }
    }
    static getDerivedFromError(){
        return {isCond : true}
    }
    componentDidCatch(error){
    console.log(error);
    }
    render(){
        if(this.state.isCond){
            return <div><strong>Not a User</strong></div>
        }
        return this.props.children
    }
}

export default ErrorBoundaryComp;