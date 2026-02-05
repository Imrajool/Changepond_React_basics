import React from 'react'
import { Outlet } from 'react-router-dom'
import NavComp from './NavComp'
import HooksComp from '../ReactHooks/HooksComp'

const DashboardComp = () => {
    return (
        <div className='container'>
            {/* <h2>This is DashBoard Component</h2> */}
            <div className='card border-primary'>
                <div className='card-header border-primary'>
                    <NavComp/>
                    <Outlet/>
                </div>
                <div className='card-body border-primary'>
                </div>
                <div className='card-footer border-primary'>Card Footer</div>
            </div>
        </div>
    )
}

export default DashboardComp

