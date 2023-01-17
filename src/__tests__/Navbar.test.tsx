import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, fireEvent } from '@testing-library/react'

import Navbar from '../Components/Navbar'

const setTokenSpy = vi.fn()

vi.mock('../store', () => {
    return { useAppStore: () => ['', setTokenSpy] }
})

describe('Navbar', () => {
    it('should render without routes', () => {
        const { getByRole } = render(
            <Navbar
                routeInfos={[]}
                isLoggedIn={false}
            />
        )
        expect(getByRole('menu')).toBeInTheDocument()
    })

    it('should render correctly if logged in', () => {
        const { getByText } = render(
            <Navbar
                routeInfos={[]}
                isLoggedIn={true}
            />
        )

        const signOutButton = getByText('Sign Out')
        fireEvent.click(signOutButton)

        expect(setTokenSpy).toBeCalled()
    })
})
