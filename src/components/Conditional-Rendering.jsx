import '../css/App.css'

// Use of if-else and Ternary Operator
function Login(){

    const isLoggedIn = true
    if(isLoggedIn){
        return <h1>Welcome User</h1>
    }
    else{
        return<h2>Please Login</h2>
    }

    // also like this
    return (
        <div>
            {isLoggedIn ? <h1>Welcome User</h1> : <h2>Please Login</h2>}
        </div>
    )
}

// Use of && Operator
function Message(){
    const hasMessage = true
    return(
        <div>
            {hasMessage && <p>You have new message</p>}
        </div>
    )
}

function Visibility(){

    const isVisible = true
    const visiblity = isVisible ? "visible" : "unvisible"

    return (
        <div>
            <h1 className={visiblity}>Conditional Rendering</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, nesciunt.</p>
        </div>
    )
}

export {Login , Message , Visibility}