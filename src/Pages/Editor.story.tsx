import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Editor from './Editor'

export default {
    title: 'Pages/Editor',
    component: Editor,
}

const Template = args => (
    <BrowserRouter>
        <Editor {...args} />
    </BrowserRouter>
)

export const Default = Template.bind({})
