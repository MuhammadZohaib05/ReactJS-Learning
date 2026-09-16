import {useReducer} from 'react'

function UseReducer() {

    const [checked , toggle] = useReducer((checked) => !checked , false );

  return (
        <div>
            <input type="checkbox" checked={checked}
            onChange={toggle} />

            {checked ? "Checked" : "Not Checked"}
            <hr />
        </div>
  )
}

export default UseReducer