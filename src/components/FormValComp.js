import React, { useState } from 'react'

const FormValComp = () => {
    const [user,setUser]=useState({
        fname:"",
        lname:"",
        password:""
    })

    const update = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };


    // const updatelName=(e)=>{
    //     const {name,values} = e.target;
    //     setUser({...user,[name]:values})
    // }

    // const updatePassword=(e)=>{
    //     const {name,values} = e.target;
    //     setUser({...user,[name]:values})
    // }

    const checkData=(e)=>{
        e.preventDefault();
        if(user.fname===""){
            return window.alert("First Name is required")
        }
        if(!user.fname.match("[a-zA-z]{2,15}")){
            return window.alert("Name should be in characters with min 2 charcaters and max 15 characters")
        }
        if(!user.lname.match("[a-zA-z]{2,15}")){
            return window.alert("Name should be in characters with min 2 charcaters and max 15 characters")
        }
        window.alert(JSON.stringify(user))
    }
    return (
        <div>
            <hr/>
            <form onSubmit={checkData}>
                <input type='text' name='fname' placeholder='Enter first name' value={user.fname} onChange={update}></input><br></br>
                <input type='text' name='lname' placeholder='Enter last name' value={user.lname} onChange={update}></input><br/><hr/>
                <input type='text' name='password' placeholder='Enter password' value={user.password} onChange={update}></input><br/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default FormValComp
