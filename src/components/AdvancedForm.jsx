import { useState } from "react"
function AdvanceForm(){

    const [formData, setformData] = useState({
                                        gender : "",
                                        agree : false,
                                        country : "Pakistan"
                                    })

        const handleSubmit = (e) =>{
            e.preventDefault()
            console.log(formData)
        }

        const handleChange = (e) => {
            const { name ,type, checked , value} = e.target
            setformData((prev) => ({
                ...prev, 
                [name] : type === "checkbox" ? checked : value
            }))
        }

    return(
        <form onSubmit={handleSubmit}>
            <h2>Form With Checkbox , Radio & Select</h2>

            <label>
                <input 
                    type="radio" 
                    name="gender" 
                    value="Male"
                    checked={formData.gender === "Male"}
                    onChange={handleChange} />
                Male
            </label>

            <label>
                <input 
                    type="radio" 
                    name="gender" 
                    value="Female"
                    checked={formData.gender === "Female"}
                    onChange={handleChange} />
                Female
            </label>
            <br />

            <label>
                Country:
                <select name="country" value={formData.country} onChange={handleChange}>
                    <option value="Pakistan">Pakistan</option>
                    <option value="England">England</option>
                    <option value="US">US</option>
                </select>
            </label>
            <br />

            <label>
                <input type="checkbox" name="agree" checked={formData.agree} onChange={handleChange} />
                I agree to terms and conditions
            </label>
            <br />

            <button type="submit">Submit</button>

            <p>-----------------------------------------</p>

        </form>
    )

}

export default AdvanceForm