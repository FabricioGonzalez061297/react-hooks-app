import React from 'react';

import './effects.css';
import { UseForm } from '../../hooks/useForm';

export const SimpleFormWithCustomHook=()=>{

    const [formState,handleInputChange] = UseForm({
        name:'',
        email:'',
        password:''
    });

    const {name,email,password } =formState;

     const onSubmit= e=>{
        e.preventDefault();

        console.log(formState);
     };

    return (
        <form onSubmit={onSubmit}>
            <h1>Use Custom hook</h1>
            <hr></hr>

            <div className="form-group" >
                    <input
                    placeholder="Tu nombre"
                    autoComplete="false"
                    className="form-control"
                     type="text"
                     name="name"
                     value={name}
                     onChange={handleInputChange}   
                    ></input>
            </div>
            <br></br>
            <div className="form-group" >
                    <input
                    placeholder="angel@gmail.com"
                    autoComplete="false"
                    className="form-control"
                     type="email"
                     name="email"
                     value={email}
                     onChange={handleInputChange}   
                    ></input>
            </div>

            <br></br>
            <div className="form-group" >
                    <input
                    placeholder="****"
                    className="form-control"
                     type="password"
                     name="password"
                     value={password}
                     onChange={handleInputChange}   
                    ></input>
            </div>
            
            <br></br>
            <button
            type="submit"
            className="btn btn-success"
            >Guardar</button>
        </form>
    );
}