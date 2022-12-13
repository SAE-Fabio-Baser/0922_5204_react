import React, {ReactElement} from "react"

import { Home, About, Register, Login } from "./src/Pages"

export interface RouteInfo {
    page: ReactElement
    path: string
    navMenu: "left" | "right" | "none"
    navText: string
}

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
    }, {
        path: "/login",
        page: <Login />,
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

export default routeInfos
