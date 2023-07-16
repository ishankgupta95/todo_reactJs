import React from 'react'
import {ListItemText, ListItem, Divider} from '@mui/material';

function TodoList({todo}) {
  return (
    <>
        <ListItem alignItems="flex-start" key={todo.id}>
            <ListItemText primary={todo.title} secondary={todo.description} />
        </ListItem>
        <Divider variant="middle" component="li" />
    </>
  )
}

export default TodoList
