import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Home from './Home'

export default {
    title: 'Pages/Home',
    component: Home,
}

const Template = args => (
    <BrowserRouter>
        <Home {...args} />
    </BrowserRouter>
)

export const Default = Template.bind({})
