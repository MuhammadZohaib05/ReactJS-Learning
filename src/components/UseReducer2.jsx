import {useReducer} from 'react'

function UseReducer2() {

    function reducer(state, action){
        switch(action.type){
            case "increment" :
                return {count: state.count + 1}
            case "decrement" :
                return {count: state.count - 1}
            case "Reset" :
                return {count: 0}
            default:
                return state;
        }
    }

    const [state , dispatch] = useReducer(reducer, { count:0 })

  return (
    <div>
        <h2>Count: {state.count}</h2>
        <button onClick={() => dispatch({ type : "increment"})}>+</button>
        <button onClick={() => dispatch({ type : "decrement"})}>-</button>
        <button onClick={() => dispatch({ type : "Reset"})}>Reset</button>
        <hr />
    </div>
  )
}

export default UseReducer2