import React, { useState } from 'react'

const GreetComp = () => {
    const [data,setData] = useState()
    return (
        <div>
            <input type='text' placeholder='Enter name' name="username" id="UserID"></input>
            Good Afternoon
            
            
            <button onClick={()=>setData("upadated Data")}>Update data</button>
                 <h1>{data}</h1>
            <img title='Image' src='https://en.wikipedia.org/wiki/Superman_%28DC_Extended_Universe%29' alt='Image'></img>
        </div>
    )
}

export default GreetComp
