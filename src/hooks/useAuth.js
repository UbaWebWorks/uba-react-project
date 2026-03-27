import { createContext, useContext } from "react"

export const useAuth = () => {
    const ctx = useContext(AuthContext)
    if (!ctx) throw new Error("Cannot access context outside provider")
    return ctx
}

export const AuthContext = createContext(null)