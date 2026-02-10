

const UserComp = (props)=>{
    if(props.user === "Ganesh"){
        return <div>
            <p>Not a User</p>
        </div>
    }
    return <div>
        <h2>This is User Component</h2>
        <p><strong>{props.user}</strong> </p></div>
}
export default UserComp;