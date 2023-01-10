import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Posts from './Posts'

export default {
    title: 'Pages/Posts',
    component: Posts,
}

const Template = args => (
    <BrowserRouter>
        <Posts {...args} />
    </BrowserRouter>
)

export const Default = Template.bind({})
