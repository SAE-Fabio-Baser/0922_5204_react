import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Login from './Login'

export default {
    title: 'Pages/Login',
    component: Login,
}

const Template = args => (
    <BrowserRouter>
        <Login {...args} />
    </BrowserRouter>
)

export const Default = Template.bind({})
