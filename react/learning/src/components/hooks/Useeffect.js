import React, { useEffect,useState } from 'react'

function Useeffect() {
    const [count, setcount] = useState(0)

     useEffect(()=> {document.title= `you clicked ${count} times`})
    return (
        <div>
            <button onClick={()=>setcount(count+1)}>click{count}times</button>
        </div>
    )
}

export default Useeffect
