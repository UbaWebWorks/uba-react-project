import { useAuth } from '@/hooks/useAuth'
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const AntiProtectedRoutes = () => {
    const { user } = useAuth()
    return user ? <Navigate to={'#'} /> : <Outlet />
}

export default AntiProtectedRoutes
