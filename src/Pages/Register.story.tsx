import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Register from './Register'

export default {
    title: 'Pages/Register',
    component: Register,
}

const Template = args => (
    <BrowserRouter>
        <Register {...args} />
    </BrowserRouter>
)

export const Default = Template.bind({})
