import React, { useEffect, useState } from 'react'
import axios from 'axios'
import EditIcon from '@mui/icons-material/Edit';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData,deleteData } from '../redux/apiSlices';
const ProductDetailComp = () => {
    const dispatch=useDispatch()
    const {products,error,status}=useSelector((state)=>state.api)
    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch,products])
    // const fetchData = () => {
    //     axios.get("http://localhost:8888/products").then((res) => {
    //         console.log(res.data)
    //         setProducts(res.data)
    //     }).catch((error) => { })
    // }

    const deleteProduct = (id)=>{
       if(window.confirm(`Are you sure to delete the product with id :${id}`)){
            dispatch(deleteData(id))
       }
    }


    return (
        <div>
            <h2>This is a Product Detail Component</h2>
            <Link to="/dashboard/addproducts" className='btn btn-primary mt-2 mb-1'><AddIcon/>Add</Link>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>S.No</th><th>Name</th><th>Price</th><th>Company</th><th>Actions</th>
                    </tr>
                </thead>
                <tbody>


                    {
                        products.length > 0 && products.map((value, index) => (
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{value.pname}</td>
                                        <td>{value.pprice}</td>
                                        <td>{value.pcompany}</td>
                                        <td>
                                            <Link to={`/dashboard/updateproducts/${value.id}`} className='btn btn-success'><EditIcon></EditIcon></Link>{" "}
                                            <button type='button' className='btn btn-danger' onClick={()=>deleteProduct(value.id)}><DeliveryDiningIcon/></button>
                                        </td>
                                    </tr>
                                    

                        ))
                    }


                </tbody>
            </table>
        </div>
    )
}

export default ProductDetailComp
