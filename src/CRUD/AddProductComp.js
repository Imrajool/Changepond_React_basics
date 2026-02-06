import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddProductComp = () => {
    const nav = useNavigate();
    const [product,setProducts]=useState({
        pname:"",
        pprice:"",
        pcompany:""
    })

    const changeData =(e)=>{
        const {name,value}=e.target;
        setProducts({...product,[name]:value})
    }

    const addProductData= (e)=>{
        e.preventDefault();
        axios.post("http://localhost:8888/products",product).then((res)=>{
            window.alert("Product added Successfully")
            nav('/dashboard/productdetails')
        }).catch((error)=>{})
    }
    return (
        <div>
            <br></br>
            {/* <h2>This is Add Product Components</h2> */}
            <form onSubmit={addProductData}>

                <input type='text' name='pname' placeholder='Enter product name' onChange={changeData} value={product.pname}></input>{" "}<br></br><br/>
                <input type='text' name='pprice' placeholder='Enter product price' onChange={changeData} value={product.pprice}></input>{" "}<br/><br/>
                <input type='text' name='pcompany' placeholder='Enter product company' onChange={changeData} value={product.pcompany}></input>{" "}<br/><br/>
                <button type='submit' className='btn btn-success'>Submit</button>
            </form>
        </div>
    )
}

export default AddProductComp
