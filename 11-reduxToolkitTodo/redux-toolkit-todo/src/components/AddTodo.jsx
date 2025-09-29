import { useState } from "react"
import { useDispatch } from "react-redux"

function AddTodo() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    const addTodoHandler = (e) => {
        e.preventdefault();
    }
    return (
        <div></div>
    )
}

export default AddTodo

/*
    * redux toolkit -> redux and react-redux are different, 
    * store is one for entire app -> single source of truth
    * store -> reducer -> useDispatch
    * feature/todo/todoSlice.js -> this is a file for all the reducer
    * components -> Addtodo.jsx , Todos.jsx
    * App.jsx or main.jsx whereever the entire project is called will be inside the Provider Wrapper
    * reducer have two main things -> source and action
*/
