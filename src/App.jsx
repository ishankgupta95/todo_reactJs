import { useEffect, useState } from 'react'
import {Container} from '@mui/material';
import './App.css'
import TodoForm from '../Components/TodoForm'

function useFetchTodos() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/todos',{method: "GET"})
      .then(response => response.json())
      .then(data => setTodos(data))
  }, [])

  return todos
}

function App() {

  const todos = useFetchTodos()

  return (
    <Container maxWidth="sm">
      <TodoForm></TodoForm>
      {todos.map((todo) => <p key={todo.id}>{todo.title} </p>)}
    </Container>
  )
}

export default App