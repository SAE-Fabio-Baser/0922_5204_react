import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { Button, Menu } from 'semantic-ui-react'
import { RouteInfo } from '../../routes'
import { useAppStore } from '../App'

function NavbarButton(props: RouteInfo) {
    const token = useAppStore(s => s.token)
    const location = useLocation()
    const navigate = useNavigate()

    const isActive = location.pathname === props.path

    if (isActive) {
        document.title = 'SAE APP - ' + props.navText
    }
    if (token && (props.path === '/login' || props.path === '/register')) {
        return null
    }
    function handleClick() {
        navigate(props.path)
    }
    return (
        <Menu.Item
            active={isActive}
            onClick={handleClick}
            key={props.path}
        >
            {props.navText}
        </Menu.Item>
    )
}

function Navbar(props: { routeInfos: RouteInfo[] }) {
    const { routeInfos } = props
    const [token, setToken] = useAppStore(s => [s.token, s.setToken])

    const leftRoutes = routeInfos.filter(rI => rI.navMenu === 'left')
    let rightRoutes = routeInfos.filter(rI => rI.navMenu === 'right')

    function handleLogout() {
        setToken('')
        sessionStorage.removeItem('sae_token')
    }

    return (
        <Menu
            pointing
            secondary
        >
            {leftRoutes.map(NavbarButton)}
            <Menu.Menu position="right">
                {rightRoutes.map(NavbarButton)}
                {token && (
                    <Button
                        basic
                        onClick={handleLogout}
                    >
                        Sign Out
                    </Button>
                )}
            </Menu.Menu>
        </Menu>
    )
}

export default Navbar
