import React, { ChangeEvent, useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Input, InputProps } from 'semantic-ui-react'
import { auth } from '../lib/api'
import { AppContext } from '../App'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const { setToken, setUser } = useContext(AppContext)

    function handleChange(_event: ChangeEvent, p: InputProps) {
        const { name, value } = p
        if (name === 'email') setEmail(value)
        else if (name === 'password') setPassword(value)
    }

    async function handleSubmit() {
        const loginResult = await auth.login(email, password)

        if (loginResult.success && loginResult.data?.token) {
            setToken(loginResult.data.token)
            sessionStorage.setItem('sae_token', loginResult.data.token)
            setUser(loginResult.data.user)
            navigate('/')
        }
    }

    function handleKeyPress(event: KeyboardEvent) {
        if (event.key !== 'Enter') return
        handleSubmit()
    }

    return (
        <div>
            <div
                style={{
                    width: '80%',
                    maxWidth: '600px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}
            >
                <Input
                    placeholder="E-Mail adress"
                    name="email"
                    value={email}
                    onChange={handleChange}
                />
                <Input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    onKeyDown={handleKeyPress}
                />
                <Button
                    basic
                    onClick={handleSubmit}
                >
                    Login
                </Button>
                <Link to="/register">Register</Link>
            </div>
        </div>
    )
}

export default Login
function useNavitage() {
    throw new Error('Function not implemented.')
}
