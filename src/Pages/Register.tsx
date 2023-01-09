import React, { ChangeEvent, useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Input, InputProps } from 'semantic-ui-react'
import { useAppStore } from '../App'

import { auth } from '../api'

function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordRep, setPasswordRep] = useState('')
    const navigate = useNavigate()

    const [setToken, setUser, setQr] = useAppStore(s => [s.setToken, s.setUser, s.setQr])

    function handleChange(_event: ChangeEvent, p: InputProps) {
        const { name, value } = p
        if (name === 'email') setEmail(value)
        else if (name === 'password') setPassword(value)
        else if (name === 'passwordRep') setPasswordRep(value)
    }

    function handleSubmit() {
        if (password !== passwordRep) return

        auth.register(email, password).then(({ data }) => {
            if (data && data.token) {
                console.log(data)
                setToken(data.token)
                setUser(data.user)
                setQr(data['2faQr'])
                sessionStorage.setItem('sae_token', data.token)
                navigate('/')
            }
        })
    }

    return (
        <div>
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
                    />
                    <Input
                        type="password"
                        placeholder="Password Repeat"
                        name="passwordRep"
                        value={passwordRep}
                        onChange={handleChange}
                    />
                    <Button
                        basic
                        onClick={handleSubmit}
                    >
                        Register
                    </Button>
                    <Link to="/login">Login</Link>
                </div>
            </div>{' '}
        </div>
    )
}

export default Register
