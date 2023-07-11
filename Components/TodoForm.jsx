import {Button, TextField, Card, Box, CardActions, Typography} from '@mui/material';

function TodoForm() {
    return ( 
        <>
            <Card style={{width: 400, padding: 20,display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}> 
                <Typography variant='h4'>Todo App</Typography>
                <TextField id="title" label="Todo Title" variant="outlined" fullWidth/>
                <TextField id="description" label="Description" variant="outlined" fullWidth/>
                <CardActions>
                    <Button variant="contained" style={{justifyContent: 'center'}} onClick={() => {
                        let title = document.getElementById('title').value
                        let description = document.getElementById('description').value

                        fetch('http://localhost:3000/todos/', {
                            method: 'POST',
                            body: JSON.stringify({
                                title,
                                description
                            }),
                            headers: {
                                'Content-type': 'application/json'
                            }
                        })
                    }}>Add</Button>
                </CardActions>
            </Card>
        </>
     );
}

export default TodoForm;