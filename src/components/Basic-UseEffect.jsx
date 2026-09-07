import { useState, useEffect } from 'react'

function BasicUseEffect() {

    const  [count , setCount] = useState(0)
    const  [name , setName] = useState("")

    useEffect(() => {
        // DOM Manipulation in external HTML Part using UseEffect
        // document.title = `Count: ${count}`
        console.log("Component Re-rendered!")
    },[count])

  return (
    <div>
        <h2>Count : {count}</h2>
        <button onClick={()=>setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default BasicUseEffect