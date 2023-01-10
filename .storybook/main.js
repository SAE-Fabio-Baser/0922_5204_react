const path = require('path')
module.exports = {
    stories: ['../src/**/*.mdx', '../src/**/*.story.@(js|jsx|ts|tsx)'],
    addons: [],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
}
