import {useState} from 'react'

function Student() {

    const [student, setStudent] = useState({
        name : "Zohaib",
        grade : "A",
        city : "Lahore"
    })

    const changeCity = () => {
        setStudent({...student, city : "Karachi"})
    }

  return (
    <div>
        <h2>Name : {student.name}</h2>
        <p>Grade : {student.grade}</p>
        <p>City : {student.city}</p>
        <br />
        <button onClick={changeCity}>Change City</button>

        <hr />

    </div>
  )
}

export default Student