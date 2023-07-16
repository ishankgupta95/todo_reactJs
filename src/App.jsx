import {Container} from '@mui/material';
import './App.css'
import TodoForm from '../Components/TodoForm'
import TodoList from '../Components/TodoList';
import useFetchTodos from '../hooks/useFetchTodos'

function App() {

  const todos = useFetchTodos()

  return (
    <Container maxWidth="sm">
      <TodoForm />

      {todos.map((todo) => <TodoList todo={todo}/>)}
    </Container>
  )
}

export default App