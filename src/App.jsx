import {Container, Box, List} from '@mui/material';
import './App.css'
import TodoForm from '../Components/TodoForm'
import TodoList from '../Components/TodoList';
import useFetchTodos from '../hooks/useFetchTodos'

function App() {

  const todos = useFetchTodos()

  return (
    <Container maxWidth="xs">
      <Box sx={{height: '100vh' }}>
        <TodoForm />
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',  }}>
          {todos.map((todo) => <TodoList todo={todo}/>)}
        </List>
      </Box>
    </Container>
  )
}

export default App