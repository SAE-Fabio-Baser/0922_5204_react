import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useAppStore } from './store'

import Navbar from './Components/Navbar'
import routeInfos from '../routes'
import CommandPalette from './Components/CommandPalette'

function App() {
    const token = useAppStore(s => s.token)
    const setCommPalOpen = useAppStore(s => s.setCommPalOpen)
    const isLoggedIn = !!token

    useEffect(() => {
        document.addEventListener('keydown', event => {
            const { key, metaKey } = event
            if (key === '/') {
                setCommPalOpen(true)
            } else if (key === 'k' && metaKey) {
                event.preventDefault()
                setCommPalOpen(true)
            }
        })
    }, [])

    return (
        <BrowserRouter>
            <Navbar
                routeInfos={routeInfos}
                isLoggedIn={isLoggedIn}
            />
            <CommandPalette />
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
