const express = require('express');
var cors = require('cors');
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

// Store todos in memory (replace with a database in a real application)
let todos = [];

// Get all todos
app.get('/todos', (req, res) => {
  res.json(todos);
});

// Create a new todo
app.post('/todos', (req, res) => {
  const { title, done } = req.body;
  const newTodo = { id: todos.length + 1, title, done };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Update a todo
app.put('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, done } = req.body;
  const todo = todos.find(todo => todo.id === id);
  if (!todo) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  todo.title = title;
  res.json(todo);
});

// Delete a todo
app.delete('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = todos.findIndex(todo => todo.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  const deletedTodo = todos.splice(index, 1)[0];
  res.json(deletedTodo);
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
