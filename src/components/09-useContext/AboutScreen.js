import React, { useContext } from 'react'
import { UserContext } from './UseContext';

export const AboutScreen = () => {

    const {user,setUser}= useContext(UserContext);

    const handleClick=()=>{
        setUser({});
    }

    return (
        <div>
            <h1>About Screen</h1>
            <hr></hr>
            
            <pre>
                {JSON.stringify(user,null,3)}
            </pre>

            <button 
             className="btn btn-warning"
             onClick={handleClick}
            >
                Logout                
            </button>
        </div>
    )
}
