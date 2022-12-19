import React, { ReactElement } from 'react'

import { Home, About, Register, Login, Users, Post, Posts, PostEditor } from './src/Pages'

export interface RouteInfo {
    page: ReactElement
    path: string
    navMenu: 'left' | 'right' | 'none'
    navText: string
    requiredRole?: number
}

const routeInfos: RouteInfo[] = [
    {
        path: '/',
        page: <Home />,
        navMenu: 'left',
        navText: 'Home',
    },
    {
        path: '/about',
        page: <About />,
        navMenu: 'left',
        navText: 'About',
    },
    {
        path: '/register',
        page: <Register />,
        navMenu: 'right',
        navText: 'Register',
    },
    {
        path: '/login',
        page: <Login />,
        navMenu: 'right',
        navText: 'Login',
    },
    {
        path: '/users',
        page: <Users />,
        navMenu: 'left',
        navText: 'Users',
        requiredRole: 2,
    },
    {
        path: '/blog',
        page: <Posts />,
        navMenu: 'left',
        navText: 'Blog',
    },
    {
        path: '/blog/:slug',
        page: <Post />,
        navMenu: 'none',
        navText: 'Post',
    },
    {
        path: '/editor',
        page: <PostEditor />,
        navMenu: 'left',
        navText: 'Editor',
    },
    {
        path: '*',
        page: <h1>404</h1>,
        navMenu: 'none',
        navText: '404 Not Found',
    },
]

export default routeInfos
