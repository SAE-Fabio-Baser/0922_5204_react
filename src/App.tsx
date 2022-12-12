import React, { ReactElement } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./Components/Navbar"

import Home from "./Pages/Home"
import About from "./Pages/About"
import Register from "./Pages/Register"

export interface RouteInfo {
    page: ReactElement
    path: string
    navMenu: "left" | "right" | "none"
    navText: string
}

function App() {

    const routeInfos: RouteInfo[] = [
        {
            path: "/",
            page: <Home />,
            navMenu: "left",
            navText: "Home"
        },
        {
            path: "/about",
            page: <About />,
            navMenu: "left",
            navText: "About"
        },
        {
            path: "/register",
            page: <Register />,
            navMenu: "right",
            navText: "Register"
        },{
            path: "/login",
            page: <p>ich bin login</p>,
            navMenu: "right",
            navText: "Login"
        },
        {
            path: "*",
            page: <h1>404</h1>,
            navMenu: "none",
            navText: "404 Not Found"
        }
    ]

    return (
        <BrowserRouter>
            <Navbar routeInfos={routeInfos}/>
            <Routes>
                {routeInfos.map(routeInfo => (
                    <Route key={routeInfo.path} path={routeInfo.path} element={routeInfo.page} />
                ))}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
