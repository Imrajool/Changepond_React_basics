import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const HooksComp = () => {
    return (
        // <div>
        //     <h2>This is Hooks Component</h2>
        //     <Outlet/>
        // </div>

        <div>
            <div className='container'>
                {/* <h2>This is DashBoard Component</h2> */}
                <div className='card border-primary'>
                    <div className='card-header border-primary'>
                        
                    </div>
                    
                    <div className='card-body border-primary'>
                        <Link to="usestate" className='btn btn-primary btn-sm'>Use State</Link>
                        <Outlet />

                    </div>
                </div>

            </div>
        </div>
    )
}

export default HooksComp
