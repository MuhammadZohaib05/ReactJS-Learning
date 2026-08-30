import Hello from './components/Header'
import Profile from './components/ProfileCard'
import Todo from './components/Todo'
import TodoItem from './components/TodoItem'
import Button from './components/TDButton'
import './css/Todo.css'

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
    </>
  )
}

export default App
