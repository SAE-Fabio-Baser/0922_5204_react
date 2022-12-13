import React, { useContext } from "react"
import { useLocation, useNavigate } from "react-router-dom"

import { Menu } from "semantic-ui-react"
import { RouteInfo } from "../../routes"
import { AppContext } from "../App"

function NavbarButton(props: RouteInfo) {
    const { isLoggedIn } = useContext(AppContext)
    const location = useLocation()
    const navigate = useNavigate()

    const isActive = location.pathname === props.path

    if (isActive) {
        document.title = "SAE APP - " + props.navText
    }
    if (isLoggedIn && (props.path === "/login" || props.path === "/register")) {
        return null
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

    const leftRoutes = routeInfos.filter(rI => rI.navMenu === "left")
    let rightRoutes = routeInfos.filter(rI => rI.navMenu === "right")

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
