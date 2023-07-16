import {Button, TextField, Card, Box, CardActions, Typography} from '@mui/material';
import usePostTodo from '../hooks/usePostTodo';

function TodoForm() {
    return ( 
        <>
            <Card style={{width: 400, padding: 20,display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}> 
                <Typography variant='h4'>Todo App</Typography>
                <TextField id="title" label="Todo Title" variant="outlined" fullWidth/>
                <TextField id="description" label="Description" variant="outlined" fullWidth/>
                <CardActions>
                    <Button variant="contained" style={{justifyContent: 'center'}} onClick={usePostTodo}>Add</Button>
                </CardActions>
            </Card>
        </>
     );
}

export default TodoForm;