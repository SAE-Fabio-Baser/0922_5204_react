import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'
interface User {
    email: string
    password: string
    role?: number
    '2faSecret'?: string
    _id: string
}
interface AppStore {
    token: string
    setToken: (token: string) => void
    user: User | null
    setUser: (user: User | null) => void
    qr: string
    setQr: (qr: string) => void
}
export const useAppStore = create<AppStore>()(
    persist(
        devtools(set => ({
            token: '',
            setToken: token => set({ token }),
            user: null,
            setUser: user => set({ user }),
            qr: '',
            setQr: qr => set({ qr }),
        })),
        { name: 'AppStore' }
    )
)
