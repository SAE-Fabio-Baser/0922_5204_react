import React, { createContext, Dispatch, SetStateAction, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './Components/Navbar'
import routeInfos from '../routes'

interface User {
    email: string
    password: string
    role?: number
    '2faSecret'?: string
    _id: string
}

interface TAppContext {
    token: string
    setToken: Dispatch<SetStateAction<string>>
    user: User | null
    setUser: Dispatch<SetStateAction<User | null>>
    qr: string
    setQr: Dispatch<SetStateAction<string>>
}

// @ts-ignore
export const AppContext = createContext<TAppContext>()

function App() {
    const [token, setToken] = useState(sessionStorage.getItem('sae_token') || '')
    const [user, setUser] = useState<User | null>(null)
    const [qr, setQr] = useState('')

    return (
        <AppContext.Provider value={{ token, setToken, user, setUser, qr, setQr }}>
            <BrowserRouter>
                <Navbar routeInfos={routeInfos} />
                <Routes>
                    {routeInfos.map(routeInfo => (
                        <Route
                            key={routeInfo.path}
                            path={routeInfo.path}
                            element={routeInfo.page}
                        />
                    ))}
                </Routes>
            </BrowserRouter>
        </AppContext.Provider>
    )
}

export default App
