// UI Layer

import React, { useState } from 'react'
import '../style/form.scss'
import { Link, useNavigate } from 'react-router'
import axios from 'axios'
import { useAuth } from '../hooks/useAuth'

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const { user, loading, handleLogin } = useAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await handleLogin(username, password)
        navigate("/")
        // axios.post("http://localhost:3000/api/auth/login", {
        //     username, password
        // }, {
        //     withCredentials: true
        // })
        // .then(res => {
        //     console.log(res.data)
        // })
    }

    if (loading) {
        return (
            <main>
                <h1>Loading...</h1>
            </main>
        )
    }

    return (
        <main>
            <div className="form-container">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Enter username"
                        onInput={(e) => { setUsername(e.target.value) }}
                    />
                    <input 
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter password"
                        onInput={(e) => { setPassword(e.target.value) }}
                    />
                    <button className="button primary-button">Login</button>
                </form>
                <p>Don't have an account? <Link className='toggleAuthForm' to="/register">Create One.</Link></p>
            </div>
        </main>
    )
}

export default Login
