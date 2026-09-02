import Hello from './components/Header'
import Profile from './components/ProfileCard'
import Todo from './components/Todo'
import TodoItem from './components/TodoItem'
import Button from './components/TDButton'
import './css/Todo.css'
import MyFun from './components/Functions'
import Fruits from './components/Array'
import {Person , MultipleUsers} from './components/Object'
import {Login , Message , Visibility} from './components/Conditional-Rendering'
import Props from './components/Props'
import PButton from './components/PButton'

function App() {

  // Conditional Rendering
  // const isLoggedIn = true;
  // if(isLoggedIn){
  //   return <Hello />
  // }
  // else{
  //   return <Fruits />
  // }

  // Props.jsx 
  // const hobbies = ["Reading" , "Coding" , "Travelling"]
  
  // PButton.jsx
  // function Message(){
  //   alert("Hello From Message Box")
  // }
  // function ByeMessege(){
  //   alert("Hello From Bye Messege Box")
  // }



  return (
    <>
      <Hello />
      <Profile />
      <div className="todo-page">
        <div className="todo-container">
          <Todo />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <Button />
        </div>
      </div>
      <MyFun />
      <Fruits />
      <Person />
      <MultipleUsers />
      <Login />
      <Message />
      <Visibility />
      {/* <Props name="Zohaib" age={25} city="Lahore" hobbies={hobbies}/>
      <PButton label="Click Me" handleClick={Message} />
      <br />
      <PButton label="Just Click" handleClick={ByeMessege} />
      <hr /> */}

    </>
  )
}

export default App
