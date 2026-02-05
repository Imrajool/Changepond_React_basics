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
        </div>
    )
}

export default NavComp
