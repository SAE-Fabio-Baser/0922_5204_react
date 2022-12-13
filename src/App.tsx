import React, { createContext, Dispatch, DispatchWithoutAction, SetStateAction, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './Components/Navbar'
import routeInfos from '../routes'

interface User {
    email: string
    password: string
    role?: number
    _id: string
}

interface TAppContext {
    token: string
    setToken: Dispatch<SetStateAction<string>>
    user: User | null
    setUser: Dispatch<SetStateAction<User | null>>
}

// @ts-ignore
export const AppContext = createContext<TAppContext>()

function App() {
    const [token, setToken] = useState(sessionStorage.getItem('sae_token') || '')
    const [user, setUser] = useState<User | null>(null)

    return (
        <AppContext.Provider value={{ token, setToken, user, setUser }}>
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
