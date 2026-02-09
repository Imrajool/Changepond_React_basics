const { Component, Fragment } = require("react");

class MyComp extends Component{
    render(){
        const {fname,age,gender} = this.props;
        return(
            <Fragment>
            <h2>This is My Component</h2>
            <p>My Name is <strong>{fname}</strong></p>
            <p>My Age is <strong>{age}</strong></p>
            <p>My Gender is <strong>{gender}</strong></p>
            </Fragment>
        )
    }
}


export default MyComp