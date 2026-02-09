import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { updateData } from '../redux/apiSlices'

const UpdateProductComp = () => {
    const { id } = useParams()
    const nav = useNavigate()
    const dispatch = useDispatch()

    const [product, setProduct] = useState({
        pname:"",
        pprice:"",
        pcompany:""
    })

    const changeData = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value })
    }

    // const addProductData= (e)=>{
    //     e.preventDefault();
    //     axios.post("http://localhost:8888/products/addproducts",product).then((res)=>{
    //         window.alert("Product added Successfully")
    //         nav('/dashboard/productdetails')
    //     }).catch((error)=>{})
    // }

    const newData = (e)=>{
        e.preventDefault()
        dispatch(updateData({id,updatedProduct:product}))
        nav('/dashboard/productdetails')
    }
    useEffect(() => {
        axios.get(`http://localhost:8888/products/${id}`)
        .then(res=>{
            setProduct({
                pname:res.data.pname || "",
                pprice:res.data.pprice ||  "",
                pcompany:res.data.pcompany || "",
            })
            
        })
        .catch(console.error)
    }, [dispatch])

    return (
        <div>
            <h2>This is Update Product Component</h2>
            <form onSubmit={newData}>
                <input type='text' name='pname' placeholder='Enter Product name' value={product.pname || ""} onChange={changeData}></input><br></br>
                <input type='text' name='pprice' placeholder='Enter Product price' value={product.pprice || ""} onChange={changeData}></input><br/><hr/>
                <input type='text' name='pcompany' placeholder='Enter Product company' value={product.pcompany || ""} onChange={changeData}></input><br/>
                <button type='submit'>Update</button>
            </form>
        </div>
    )
}

export default UpdateProductComp
