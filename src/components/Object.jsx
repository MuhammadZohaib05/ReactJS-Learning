function Person(){

    const user = {
        firstName:"Muhammad",
        lastName:"Zohaib",
        age:22
    }

        function fullName(user){
            return user.firstName +" "+ user.lastName;
        }

    return (
        <div>
            <h1>Person Details</h1>
            {/* <p>Full Name : {user.firstName} {user.lastName}</p>
            also like this */}
            <p>Full Name : {fullName(user)}</p>
            <p>Age : {user.age}</p>
        </div>
    )
}

function MultipleUsers(){
    const users = [
        {firstName:"Muhammad", lastName:"Zohaib", age:22},
        {firstName:"Asad", lastName:"Ali", age:20},
        {firstName:"Sarmad", lastName:"Kamran", age:21}
    ]
    function fullName(user){
            return user.firstName +" "+ user.lastName;
    }

    return (
        <div>
            <h2>Persons Details</h2>
            <ul>
            {users.map((user) => (
                <li>{fullName(user)} is {user.age} years old.</li>
            ))}
            </ul>
        </div>
    )
}

export { Person, MultipleUsers };