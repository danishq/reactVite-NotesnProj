import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
    const { user } = useContext(UserContext)
    if (!user) {
        return (
            <div className="bg-emerald-600 m-5 text-5xl">
                <h1 className="p-1.5">Please Login</h1>
            </div>
        )
    }
    else {
        return (
            <div className="bg-emerald-600 m-5 text-5xl">
                <h1 className="p-1.5">{user.username} is Logged in</h1>
                <h1 className="p-1.5">{user.password} is password</h1>
            </div>
        )
    }
}

export default Profile
