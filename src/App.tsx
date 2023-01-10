import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useAppStore } from './store'

import Navbar from './Components/Navbar'
import routeInfos from '../routes'

function App() {
    const token = useAppStore(s => s.token)
    const isLoggedIn = !!token

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
