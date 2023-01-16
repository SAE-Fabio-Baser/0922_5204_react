import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { Button, Menu } from 'semantic-ui-react'
import { RouteInfo } from '../../routes'
import { useAppStore } from '../store'

function NavbarButton(props: { routeInfo: RouteInfo; isLoggedIn: boolean }) {
    const { routeInfo, isLoggedIn } = props

    const { path, navText } = routeInfo
    const location = useLocation()
    const navigate = useNavigate()

    const isActive = location.pathname === path

    if (isActive) {
        document.title = 'SAE APP - ' + navText
    }
    if (isLoggedIn && (path === '/login' || path === '/register')) {
        return null
    }
    function handleClick() {
        navigate(path)
    }
    return (
        <Menu.Item
            active={isActive}
            onClick={handleClick}
            key={path}
        >
            {navText}
        </Menu.Item>
    )
}

function Navbar(props: { routeInfos: RouteInfo[]; isLoggedIn: boolean }) {
    const { routeInfos = [], isLoggedIn } = props
    const [token, setToken] = useAppStore(s => [s.token, s.setToken])

    const leftRoutes = routeInfos.filter(rI => rI.navMenu === 'left')
    let rightRoutes = routeInfos.filter(rI => rI.navMenu === 'right')

    function handleLogout() {
        setToken('')
    }

    return (
        <Menu
            pointing
            secondary
            role="menu"
        >
            {leftRoutes.map(rI => (
                <NavbarButton
                    routeInfo={rI}
                    isLoggedIn={isLoggedIn || !!token}
                />
            ))}
            <Menu.Menu position="right">
                {rightRoutes.map(routeInfo => (
                    <NavbarButton
                        routeInfo={routeInfo}
                        isLoggedIn={isLoggedIn || !!token}
                    />
                ))}
                {(isLoggedIn || token) && (
                    <Button
                        basic
                        onClick={handleLogout}
                        role="button"
                    >
                        Sign Out
                    </Button>
                )}
            </Menu.Menu>
        </Menu>
    )
}

export default Navbar
