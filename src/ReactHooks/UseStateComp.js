import React, { useState } from 'react'

const UseStateComp = () => {
    const [count, setCount] = useState(0);
    const [name,setName]=useState("Anto")
    const [movies,setMovies]=useState(["24","Interstellar","Anniyan","nanban"])

    return (
        <div>
            <h2>This is Use State Component</h2>
            <p>Count :{count}</p>
            <button type='button' onClick={() => setCount(count + 1)}>Count++</button>
            <hr/>
            <p>Name :{name}</p>
            <button type='button' onClick={() => setName("Anto Rajool")}>Change Name</button>
            <hr/>

            <p>Movies List</p>
            <ul>
                {
                    movies.map((values,index)=>{
                        return <li key={index}>{values}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default UseStateComp
