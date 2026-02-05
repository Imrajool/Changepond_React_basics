

const UserComp = (props)=>{
    if(props.user === "Ganesh"){
        throw new ("Not a User")
    }
    return <div>{props.user}</div>
}
export default UserComp;