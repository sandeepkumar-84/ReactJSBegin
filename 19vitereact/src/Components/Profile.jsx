import React, {useContext} from "react";
import UserContext from "../Context/UserContext";


function Profile(){
    const {user} = useContext(UserContext)

    if(!user) return <div>Please login</div>

    return <div> Welcome <span className="text-green-500">{user.username}</span> Encrypted Password is <span className="text-green-500">{user.password}</span></div> 
}

export default Profile