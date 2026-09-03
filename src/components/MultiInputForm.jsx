import { useState } from "react"

function MultiInputForm(){

    const [formData, setformData] = useState({
                                        name : "",
                                        email : "",
                                        age : ""
                                    })

        const handleSubmit = (e) =>{
            e.preventDefault()
            console.log(formData)
        }

        const handleChange = (e) => {
            const { name , value} = e.target
            setformData((prev) => ({
                ...prev, 
                [name] : value
            }))
        }

    return(
        <form onSubmit={handleSubmit}>
            <h2>Multiple Input Form</h2>

            <label>Name : </label>
            <input name="name"
             type="text" 
             placeholder="Enter Name" 
             value={formData.name}
             onChange={handleChange} />
            <br />

            <label>Email : </label>
            <input name="email" 
            type="email" 
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange} />
            <br />

            <label>Age : </label>
            <input name="age" 
            type="number" 
            placeholder="Enter Age" 
            value={formData.age}
            onChange={handleChange}  />
            <br />

            <button type="submit">Submit</button>
            <p>-----------------------------------------</p>
        
        </form>
    )
}

export default MultiInputForm