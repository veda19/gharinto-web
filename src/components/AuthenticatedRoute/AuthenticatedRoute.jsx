import React from "react"
import { useSelector } from "react-redux"

const AuthenticatedRoute = ({ children }) => {
    const { userDetails } = useSelector((state) => state?.user?.userAuth)
    if(!userDetails?.token) {
        // redirect to the login page
        return null
    }
    return <div>{children}</div>
} 

export default AuthenticatedRoute