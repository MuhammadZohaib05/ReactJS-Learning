import '../css/App.css'

function Hello(){

    const name = "Friends"
    const headingStyle = {
        color:"white",
        textAlign:"center",
        backgroundColor:"black",
        fontSize:"50px"
    }

    return (
        <>
        <h2 style={headingStyle}>Hello {name}</h2>
        <p className='test'>This is my Profile Card...</p>
        </>
    )
}

export default Hello