import { useNavigate } from "react-router-dom"

function Home(){

    const navigate = useNavigate();

    const gotoAbout = () => {
        navigate("/about")
    }

    return (
        <div>
            <h1>Welcome to Home Page</h1>
            <button onClick={gotoAbout}>Go to About</button>
            <hr />
        </div>
    )
}

export default Home