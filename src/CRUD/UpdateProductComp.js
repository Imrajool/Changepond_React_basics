import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchData, updateData } from '../redux/apiSlices'

const UpdateProductComp = () => {
    const { id } = useParams()
    const nav = useNavigate()
    const dispatch = useDispatch()

    const products = useSelector((state) => state.api.products);


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
        dispatch(updateData({id,updateProduct:product}))
        dispatch(fetchData())
        nav('/dashboard/datalist')
    }
    // useEffect(() => {
    //     axios.get(`http://localhost:8888/products/${id}`)
    //     .then(res=>{
    //         setProduct({
    //             pname:res.data.pname,
    //             pprice:res.data.pprice,
    //             pcompany:res.data.pcompany,
    //         })
            
    //     })
    //     .catch(console.error)
    // }, [dispatch,product,id])

    useEffect(() => {
    if (products?.length === 0) {
      dispatch(fetchData());
    } else {
      const selectedProduct = products.find(
        (item) => String(item.id) === String(id)

      );
      if (selectedProduct) {
        setProduct(selectedProduct);
      }
    }
  }, [dispatch, products, id]);


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
