import React from 'react';
import { useState } from "react";


function Login({ setIsLogin }) {
    const database = [
        {
            username: 'admin',
            password: '1'
        },
        {
            username: 'tuongms',
            password: 'ms'
        }
    ]

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        const user = database.find(item => item.username === username && item.password === password)
        if(user) {
            setIsLogin(true)
        }
        else {
            alert('Username or password incorrect')
        }
    }

    return ( 
        <div onSubmit={handleSubmit}>
            <h1>Login</h1>
            <form>
                <input  
                    type="text" 
                    placeholder="Username" 
                    onChange={(e) => setUsername(e.target.value)}
                    required  
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    required 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <button type="submit" >Login</button>
            </form>
        </div>
     );
}

export default Login;