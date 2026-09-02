import {useState} from 'react'

function ToggleText() {

    const [isVisible, setisVisible] = useState(true)

  return (
    <div>
        <button onClick={() => setisVisible(!isVisible)}>
            {isVisible ? "Hide" : "Show"} Text
        </button>

        {isVisible && <p>This is Secret Messege</p>}

        <p>-----------------------------------------</p>

    </div>
  )
}

export default ToggleText