import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'

import Navbar from './Components/Navbar'
import routeInfos from '../routes'

interface User {
    email: string
    password: string
    role?: number
    '2faSecret'?: string
    _id: string
}

interface AppStore {
    token: string
    setToken: (token: string) => void
    user: User | null
    setUser: (user: User | null) => void
    qr: string
    setQr: (qr: string) => void
}
export const useAppStore = create<AppStore>()(
    persist(
        devtools(set => ({
            token: '',
            setToken: token => set({ token }),
            user: null,
            setUser: user => set({ user }),
            qr: '',
            setQr: qr => set({ qr }),
        })),
        { name: 'AppStore' }
    )
)

function App() {
    return (
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
    )
}

export default App
