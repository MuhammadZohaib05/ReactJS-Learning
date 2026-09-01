function Fruits(){

    const fruits = ["Apple" , "Banana" , "Orange"]
    
    return (
        <div>
            <h1>Fruit List</h1>
            <ul>
                {fruits.map((fruit, index) => (
                    <li>{index} - {fruit}</li>
                ))}
            </ul>
            <hr />
        </div>
        
    )
    
}
export default Fruits 