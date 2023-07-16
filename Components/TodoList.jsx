import React from 'react'

function TodoList({todo}) {
  return (
    <div key={todo.id}>
        <p>{todo.title} </p>
        <p>{todo.description}</p>
    </div>
  )
}

export default TodoList
