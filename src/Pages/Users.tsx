import React, { useEffect, useState } from 'react'
import { Label, List } from 'semantic-ui-react'
import { useAppStore } from '../store'
import { users } from '../api'

export interface User {
    _id: string
    username: string
    email: string
    role?: number
}

function Users() {
    const [userInfos, setUserInfos] = useState<User[]>([])
    const [token, qr] = useAppStore(s => [s.token, s.qr])

    useEffect(() => {
        users.getAllUsers(token).then(setUserInfos)
    }, [])

    return (
        <div>
            <img src={qr} />
            <List celled>
                {userInfos.map(userInfo => (
                    <List.Item key={userInfo._id}>
                        <List.Content>
                            <List.Header>
                                {userInfo.username || ''}
                                <Label basic>Role: {userInfo.role || 1}</Label>
                            </List.Header>
                            {userInfo.email}
                        </List.Content>
                    </List.Item>
                ))}
            </List>
        </div>
    )
}

export default Users
