// UI Layer

import React, { useState } from 'react'
import '../style/form.scss'
import { Link, useNavigate } from 'react-router'
import axios from 'axios'
import { useAuth } from '../hooks/useAuth'

const Register = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { user, loading, handleRegister } = useAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await handleRegister(username, email, password)
        navigate("/")
        // axios.post("http://localhost:3000/api/auth/register", {
        //     username, email, password
        // }, {
        //     withCredentials: true
        // })
        // .then (res => {
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
                <h1>Register</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Enter username"
                        onInput={(e) => { setUsername(e.target.value) }}
                    />
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter email"
                        onInput={(e) => { setEmail(e.target.value) }}
                    />
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter password"
                        onInput={(e) => { setPassword(e.target.value) }}
                    />
                    <button className="button primary-button">Register</button>
                </form>
                <p>Already have an account? <Link className='toggleAuthForm' to="/login">Login to account.</Link></p>
            </div>
        </main>
    )
}

export default Register
