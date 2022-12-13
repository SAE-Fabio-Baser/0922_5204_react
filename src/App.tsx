import React, { createContext, Dispatch, SetStateAction, useState, } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./Components/Navbar"
import routeInfos from "../routes"

interface TAppContext {
    token: string
    setToken: Dispatch<SetStateAction<string>>
    isLoggedIn: boolean
    setIsLoggedIn: Dispatch<SetStateAction<boolean>>
}

// @ts-ignore
export const AppContext = createContext<TAppContext>()

function App() {

    const [token, setToken] = useState("")
    const [isLoggedIn, setIsLoggedIn] = useState(false)


    return (
        <AppContext.Provider value={{ token, setToken, isLoggedIn, setIsLoggedIn }}>
            <BrowserRouter>
                <Navbar routeInfos={routeInfos} />
                <Routes>
                    {routeInfos.map(routeInfo => (
                        <Route key={routeInfo.path} path={routeInfo.path} element={routeInfo.page} />
                    ))}
                </Routes>
            </BrowserRouter>
        </AppContext.Provider>

    );
}

export default App;
