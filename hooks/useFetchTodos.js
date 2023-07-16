import { useEffect, useState } from 'react'

const useFetchTodos = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/todos',{method: "GET"})
        .then(response => response.json())
        .then(data => setTodos(data))
    }, [])

    return todos
}
export default useFetchTodos