
import { Component } from 'react'

const HOCComp = (WrapperComponent) => {
    class CommonCode extends Component{
        constructor(props) {
            super(props)
        
            this.state = {
                 count : 0
            }
        }
        updateState = ()=>{
            this.setState((prevState)=>({count:prevState.count+1}))
        }

        updatestate =()=>{
            this.setState((prevState)=>({count:prevState.count-1}))
        }
        
        render(){
            return(
                <WrapperComponent 
                count={this.state.count} 
                increement={this.updateState} 
                decreement={this.updatestate}></WrapperComponent>
            ) 
        }
            
    }    
    return CommonCode
}

export default HOCComp
