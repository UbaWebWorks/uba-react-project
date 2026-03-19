import { AuthContext } from '@/hooks/useAuth'
import { getAccessToken } from '@/utils/getAccessToken'
import React, { useState } from 'react'

// Not useful right now

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const { accessToken, updateAccessToken } = getAccessToken()

    const value = { user, setUser, accessToken, updateAccessToken }

    //Refresh Endpoint useEffect

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
