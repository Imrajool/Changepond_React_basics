import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchData} from '../redux/apiSlices'

const DataListComp = () => {

    const dispatch = useDispatch();
    const data = useSelector((state)=>state.api.data)
    const status = useSelector((state)=>state.api.status)

    useEffect(()=>{
        dispatch(fetchData())
    },[])
    return (
        <div>
            {/* <h2>This is Data List Component</h2> */}
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>S.No</th><th>Name</th><th>Price</th><th>Company</th><th>Actions</th>
                    </tr>
                </thead>
                <tbody>


                    {
                        data?.length > 0 && data.map((value, index) => (
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{value.pname}</td>
                                        <td>{value.pprice}</td>
                                        <td>{value.pcompany}</td>
                                        <td>
                                            {/* <Link to={`/dashboard/updateproducts/${value.id}`} className='btn btn-success'><EditIcon></EditIcon></Link>{" "} */}
                                            {/* <button type='button' onClick={()=>deleteProduct(value.id)} className='btn btn-danger'><DeliveryDiningIcon/></button> */}
                                        </td>
                                    </tr>
                                    

                        ))
                    }


                </tbody>
            </table>
        </div>
    )
}

export default DataListComp
