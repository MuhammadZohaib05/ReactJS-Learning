function MyFun(){

    function getName(yourname){
        return yourname;
    }
    
    const Click = () => {
        alert("Button was Clicked")
    }

    const handleInput = (event) => {
        console.clear()
        console.log("Value : ", event.target.value)
    }

    const HandleMouseOver = () => console.log("Mouse is Over the text!")
    const HandleDoubleClick = () => console.log("Text Double Clicked!")

    const name1 = "Muhammad"
    const name2 = "Zohaib"

    return (
        <>
            <h1><i>Function</i></h1>
            <h3>Hello {getName(name1)}</h3>
            <h3>Bye {getName(name2)}</h3>
            <p>--------------</p>

            <h1><i>Event</i></h1>
            <button onClick={Click}>Click Me</button>
            <br />
            <button onClick={() => alert("Hello Zohaib from inline function")}>Say Hello</button>
            <br />
            <p>--------------</p>

            <h1><i>onChange Event</i></h1>
            <input type="text" onChange={handleInput} placeholder="Type Something" />
            <p>--------------</p>
            
            <h1><i>MouseOver & DoubleClicked</i></h1>
            <p onMouseOver={HandleMouseOver} onDoubleClick={HandleDoubleClick}>Lorem ipsum dolor sit amet.</p>
            <hr />

        </>
    )

}

export default MyFun 