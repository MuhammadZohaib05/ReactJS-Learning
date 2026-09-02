import {useState} from "react"

function Counter(){
    const [count, setCount] = useState(0)

    const increase = () => {
        setCount(count + 1)
    }
    const decrease = () => {
        setCount(count - 1)
    }

    return (
        <div>
            <h1><u>States</u></h1>
            <br />
            <h2>Count : {count}</h2>
            <button onClick={increase}>Increase</button>
            <br />
            <button onClick={decrease}>Decrease</button>
            <p>-----------------------------------------</p>

        </div>
    )
}

export default Counter