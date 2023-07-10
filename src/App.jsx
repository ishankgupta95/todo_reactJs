import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [todos, setTodos] = useState([])
  console.log(typeof todos)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setTodos(json))
  }, [])
  console.log(todos)

  return (
    <>
     {todos.map((todo) => <h1 key={todo.id}>{todo.title}</h1>)}
    </>
  )
}

export default App