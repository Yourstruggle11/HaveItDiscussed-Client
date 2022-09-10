import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export const UserProtection = ({ children }) => {
    const { userInfo } = useSelector((state) => state.userSignin)

    if (!userInfo) {
        return <Navigate to="/login" />
    }

    return children
}
