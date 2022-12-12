import React from "react"
import { useLocation, useNavigate } from "react-router-dom"

import { Menu } from "semantic-ui-react"
import { RouteInfo } from "../App"

function NavbarButton(props: RouteInfo) {
    const location = useLocation()
    const navigate = useNavigate()

    const isActive = location.pathname === props.path

    if (isActive) {
        document.title = "SAE APP - " + props.navText
    }

    function handleClick() {
        navigate(props.path)
    }
    return (
        <Menu.Item active={isActive} onClick={handleClick} key={props.path}>
            {props.navText}
        </Menu.Item>
    )
}

function Navbar(props: { routeInfos: RouteInfo[] }) {
    const { routeInfos } = props
    const location = useLocation()

    const leftRoutes = routeInfos.filter(rI => rI.navMenu === "left")
    const rightRoutes = routeInfos.filter(rI => rI.navMenu === "right")

    return (
        <Menu pointing secondary>
            {leftRoutes.map(NavbarButton)}
            <Menu.Menu position="right">
                {rightRoutes.map(NavbarButton)}
            </Menu.Menu>
        </Menu>
    )
}

export default Navbar
