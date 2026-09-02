import {useState} from 'react'

function UserProfile() {

    const [name, setName] = useState("Guest")
    const [age, setAge] = useState(18)

  return (
    <div>
        <h2>Name : {name}</h2>
        <h3>Age : {age}</h3>
        <button onClick={() => setName("Zohaib")}>Change Name</button>
        <br />
        <button onClick={() => setAge(22)}>Change Age</button>

        <p>-----------------------------------------</p>

    </div>
  )
}

export default UserProfile