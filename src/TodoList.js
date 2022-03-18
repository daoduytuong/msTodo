import React from 'react';
import { useState } from "react";


function TodoList() {
    const [todos, setTodos] = useState([])
    const [todoInput, setTodoInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setTodos(state => [...state, todoInput])
        setTodoInput('')
    }
    const clear = () => {
        setTodos([])
    }
    return ( 
        <div>
            <h1>Todo App</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Your new todo" 
                    value={todoInput}
                    onChange={e => setTodoInput(e.target.value)}
                />
                <button>+</button>
            </form>
            <div>
                {
                    todos.map((todo, index) => (
                        <p>{todo}</p>                        
                    ))
                }
            </div>
            <div>
                <b> Total: {todos.length}</b> <br/>
                <button onClick={clear}>Clear all</button>
            </div>
        </div>
     );
}

export default TodoList;