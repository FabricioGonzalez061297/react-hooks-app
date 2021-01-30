import React, { useContext } from 'react'
import { UserContext } from './UseContext';

export const LoginScreen = () => {

    const {setUser}= useContext(UserContext);

    return (
        <div>
            <h1>Login Screen</h1>
            <hr></hr>

            <button className="btn btn-primary" 
                onClick={()=>{
                    setUser({
                        id:123,
                        name:'Fabricio'
                    });
                }}
            >
                Login
            </button>
            
        </div>
    )
}
