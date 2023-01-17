import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export const useAppStore = create<AppStore>()(
    persist(
        devtools(set => ({
            token: '',
            setToken: token => set({ token }),
            user: null,
            setUser: user => set({ user }),
            qr: '',
            setQr: qr => set({ qr }),
            commPalOpen: true,
            setCommPalOpen: open => set({ commPalOpen: open }),
        })),
        { name: 'AppStore' }
    )
)
