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
import Counter from './components/Counter' 
import ToggleText from './components/ToggleText'
import LikeButton from './components/LikeButton'
import UserProfile from './components/UserProfile'
import Student from './components/Student'
import SimpleForm from './components/Simple-Form'
import MultiInputForm from './components/MultiInputForm'
import AdvanceForm from './components/AdvancedForm'
import UncontrolledForm from './components/Uncontrolled-Form'
import BasicValidationForm from './components/BasicValidationForm'
import Todos from './components/Todos'
import UseEffect from './components/Basic-UseEffect'
import Timer from './components/Timer'
import WindowSizeTracker from './components/WindowSizeTracker'
import UsersUseEffect from './components/UsersUseEffect'

import {BrowserRouter , Routes , Route ,Link} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import Products from './components/Products'
import Phone from './components/Phone'
import Laptop from './components/Laptop'
import Timer2 from './components/Timer2'
import AutoSaveForm from './components/AutoSaveForm'
import Parent from './components/Parent'


// Using UseContext()
import { createContext , useContext } from 'react'

const userContext = createContext()
function App() {

  // Using UseContext()
  const user = "Zohaib"

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
      <Counter />
      <ToggleText />
      <LikeButton />
      <UserProfile />
      <Student />
      <SimpleForm />
      <MultiInputForm />
      <AdvanceForm />
      <UncontrolledForm />
      <BasicValidationForm />
      <Todos />
      <UseEffect />
      <Timer />
      <WindowSizeTracker />
      <UsersUseEffect />

      <BrowserRouter>

        <h1>React Router Example</h1>

        <nav>
          <Link to="/">Home</Link> |
          <Link to="/about">About</Link> |
          <Link to="/contact">Contact</Link> | 
          <Link to="/products">Products</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />}>
            <Route path="phone" element={<Phone />} />
            <Route path="laptop" element={<Laptop />} />
          </Route>
          <Route path="*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>

      {/* <Timer2 /> */}
      <AutoSaveForm />

      <Parent />

      // Using UseContext()
      <userContext.Provider value={user}>
        <UCParent />
      </userContext.Provider>

    </>
  )
}

// Using UseContext()

function UCParent(){
  return <UCChild />
}

function UCChild() {
  const user = useContext(userContext)

  return (
    <>
      <h1 style={{color:"blue"}}>Name : {user}</h1>
      <UCGrandChild />
    </>
  )
}
function UCGrandChild() {
  const user = useContext(userContext)
  return (
    <>
        <h3>My Name is {user}</h3>
        <hr />
    </>
  )
}

export default App
