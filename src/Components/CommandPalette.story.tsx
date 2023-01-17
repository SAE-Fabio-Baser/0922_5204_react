import React from 'react'
import { ComponentMeta } from '@storybook/react'

import Navbar from './Navbar'
import { BrowserRouter } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'

import routeInfos from '../../routes'
export default {
    title: 'Components/Navbar',
    component: Navbar,
} as ComponentMeta<typeof Navbar>

const Template = args => {
    return (
        <BrowserRouter>
            <Navbar
                routeInfos={routeInfos}
                {...args}
            />
        </BrowserRouter>
    )
}

export const LoggedOut = Template.bind({})
LoggedOut.args = {
    isLoggedIn: false,
}

export const LoggedIn = Template.bind({})
LoggedIn.args = {
    isLoggedIn: true,
}
