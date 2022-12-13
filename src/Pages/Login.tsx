import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Button, Input, InputProps } from "semantic-ui-react"
import { auth } from "../lib/api"

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleChange(event, p: InputProps) {
        const { name, value } = p
        if (name === "email") setEmail(value)
        else if (name === "password") setPassword(value)
    }

    function handleSubmit() {
        auth.login(email, password)
    }

    return (
        <div>
            <div style={{ width: "80%", maxWidth: "600px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                <Input placeholder="E-Mail adress" name="email" value={email} onChange={handleChange} />
                <Input type="password" placeholder="Password" name="password" value={password} onChange={handleChange} />
                <Button basic onClick={handleSubmit}>Login</Button>
                <Link to="/register">Register</Link>
            </div>
        </div>
    )
}

export default Login
