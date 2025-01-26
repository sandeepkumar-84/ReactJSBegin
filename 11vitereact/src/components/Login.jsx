// setting the user context
import React from "react";
import UserContext from "../Context/UserContext";
import {useState, useContext } from "react";


export default function Login()
{
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)


    const handleLoginSubmit = ()=>{setUser({username,password})}

    return(
        <>
            <div>
                <div>Username: 
                    <input type="text" 
                        placeholder='username'
                        value = {username}
                        onChange={(e)=>{setUserName(e.target.value)}}
                        >
                    </input></div>
                <div>Password: 
                    <input type="text" 
                        placeholder='password'
                        value={password}
                        onChange={(e)=>{setPassword(e.target.value)}}
                        >
                    </input></div>
                <div><button type="submit" style={{backgroundColor:'lightblue'}} onClick={handleLoginSubmit}>Submit User Credentials</button></div>
            </div>
        </>
    )

}