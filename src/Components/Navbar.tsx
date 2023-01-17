import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Popover } from '@headlessui/react'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { RouteInfo } from '../../routes'
import { useAppStore } from '../store'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'

function NavbarButton(props: { routeInfo: RouteInfo; isLoggedIn: boolean }) {
    const { routeInfo, isLoggedIn } = props
    if (routeInfo.navMenu === 'none') return null

    const { path, navText } = routeInfo
    const location = useLocation()

    const isActive = location.pathname === path

    if (isActive) {
        document.title = 'SAE APP - ' + navText
    }
    if (isLoggedIn && (path === '/login' || path === '/register')) {
        return null
    }

    return (
        <Link
            to={path}
            key={routeInfo.navText + ' ' + routeInfo.path}
            className="text-base font-medium text-gray-500 hover:text-gray-900"
        >
            {navText}
        </Link>
    )
}

function Navbar(props: { routeInfos: RouteInfo[]; isLoggedIn: boolean }) {
    const { routeInfos = [], isLoggedIn } = props
    const setToken = useAppStore(s => s.setToken)
    const setCommPalOpen = useAppStore(s => s.setCommPalOpen)
    const navigate = useNavigate()

    function handleLogout() {
        setToken('')
        navigate('/login')
    }

    return (
        <Popover className="relative bg-white">
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <a href="#">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-8 w-auto sm:h-10"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="-my-2 -mr-2 md:hidden">
                        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Open menu</span>
                            <Bars3Icon
                                className="h-6 w-6"
                                aria-hidden="true"
                            />
                        </Popover.Button>
                    </div>

                    {routeInfos.map(rI => (
                        <NavbarButton
                            routeInfo={rI}
                            isLoggedIn={isLoggedIn}
                        />
                    ))}
                    <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
                        <div className="flex flex-row mr-6">
                            <button
                                type="button"
                                onClick={() => setCommPalOpen(true)}
                                className="rounded-full  p-1 text-gray-400 hover:text-gray-400"
                            >
                                <span className="sr-only">View notifications</span>
                                <MagnifyingGlassIcon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                />
                            </button>
                            <div className="text-xs font-semibold text-gray-400 rounded-lg my-2 p-1 px-2">
                                <kbd className="font-sans">⌘</kbd>
                                <kbd className="font-sans">K</kbd>
                            </div>
                        </div>

                        {isLoggedIn && (
                            <>
                                <button
                                    onClick={handleLogout}
                                    className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                >
                                    Logout
                                </button>
                            </>
                        )}
                        {!isLoggedIn && (
                            <>
                                <Link
                                    to="/login"
                                    className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                                >
                                    Sign in
                                </Link>
                                <Link
                                    to="/register"
                                    className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </Popover>
    )
}

export default Navbar
