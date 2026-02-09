import React from 'react'
import { Link } from 'react-router-dom'

const NavComp = () => {
    return (
        <div>
            {/* <h2>This is Navigation Component</h2> */}
            <Link to="myimages" className='btn btn-primary btn-sm'>My Images</Link>{" "}
            <Link to="hooks" className='btn btn-primary btn-sm'>Hooks</Link>{" "}
            <Link to="mycss" className='btn btn-primary btn-sm'>My CSS</Link>{" "}
            <Link to="virtualdom" className='btn btn-primary btn-sm'>Virtual DOM</Link>{" "}
            <Link to="form" className='btn btn-primary btn-sm'>Form</Link>{" "}
            <Link to="productdetails" className='btn btn-warning btn-sm'>Product</Link>{" "}
            <Link to="datalist" className='btn btn-secondary btn-sm'>Data List</Link>{" "}
            <Link to="toggle" className='btn btn-secondary btn-sm'>Toggle Image</Link>{" "}
        </div>
    )
}

export default NavComp
