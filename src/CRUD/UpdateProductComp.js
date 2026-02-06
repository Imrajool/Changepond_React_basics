import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateProductComp = () => {
    const { id } = useParams()
    const nav = useNavigate()

    const [product, setProducts] = useState({
        id: "",
        pname: "",
        pprice: "",
        pcompany: ""
    })

    const changeData = (e) => {
        const { name, value } = e.target;
        setProducts({ ...product, [name]: value })
    }

    const addProductData= (e)=>{
        e.preventDefault();
        axios.post("http://localhost:8888/products/addproducts",product).then((res)=>{
            window.alert("Product added Successfully")
            nav('/dashboard/productdetails')
        }).catch((error)=>{})
    }

    useEffect(() => {
        axios.get(`http://localhost:8888/products/${id}`).then((res) => {
            console.log(res)
        }).catch((error) => { })
    }, [])

    return (
        <div>
            <h2>This is Update Product Component</h2>
        </div>
    )
}

export default UpdateProductComp
