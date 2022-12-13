import { User } from '../Pages/Users'

interface BackendResponse {
    success: boolean
    data?: Record<string, any>
    error?: string
}

async function login(email: string, password: string): Promise<BackendResponse> {
    console.log('Login: ', { email, password })

    const body = { email, password }

    const rawResponse = await fetch('http://localhost:3000/auth/login', {
        method: 'post',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
    })

    return await rawResponse.json()
}

async function register(email: string, password: string): Promise<BackendResponse> {
    console.log('Register: ', { email, password })

    const body = {
        email,
        password,
    }

    const rawResponse = await fetch('http://localhost:3000/auth/register', {
        method: 'post',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
        },
    })

    return await rawResponse.json()
}

async function getAllUsers(token: string): Promise<User[]> {
    const rawResponse = await fetch('http://localhost:3000/api/users', {
        method: 'get',
        headers: {
            Authorization: 'Bearer ' + token,
        },
    })

    return await rawResponse.json()
}

export const auth = {
    login,
    register,
}

export const users = {
    getAllUsers,
}
