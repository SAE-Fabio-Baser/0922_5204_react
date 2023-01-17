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
    commPalOpen: boolean
    setCommPalOpen: (open: boolean) => void
}
