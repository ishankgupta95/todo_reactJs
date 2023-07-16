const usePostTodo = () => {
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
}

export default usePostTodo