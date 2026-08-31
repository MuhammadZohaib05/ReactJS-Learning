import Hello from './components/Header'
import Profile from './components/ProfileCard'
import Todo from './components/Todo'
import TodoItem from './components/TodoItem'
import Button from './components/TDButton'
import './css/Todo.css'
import MyFun from './components/Functions'
import Fruits from './components/Array'
import {Person , MultipleUsers} from './components/Object'
function App() {

  return (
    <>
      <Hello />
      <Profile />
      <div className="todo-container">
        <Todo />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <Button />
      </div>
      <MyFun />
      <Fruits />
      <Person />
      <MultipleUsers />
    </>
  )
}

export default App
