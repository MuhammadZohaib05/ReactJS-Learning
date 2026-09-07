import { useState, useEffect } from 'react'

function WindowSizeTracker() {

    const  [width , setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }

        window.addEventListener("resize" , handleResize)

        return () => {
            removeEventListener("resize" , handleResize)
            console.log("Unsubscribe from Resize Event")
        }

    },[])



  return (
    <div>
        <h2>Window Width Tracker</h2>
        <p>Current Width: {width}px</p>
        <hr />
    </div>
  )
}

export default WindowSizeTracker