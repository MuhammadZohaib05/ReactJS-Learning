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

function App() {

  // const isLoggedIn = true;
  // if(isLoggedIn){
  //   return <Hello />
  // }
  // else{
  //   return <Fruits />
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
    </>
  )
}

export default App
