import React,{useEffect,useState} from 'react';

import './effects.css';
import { Message } from './Message';

export const SimpleForm=()=>{

    const [formState,setFormState] = useState({
        name:'',
        email:''
    });

    const {name,email } =formState;

    //SOLO SE EJECUTA UNA VEZ
    useEffect(()=>{
        console.log('hola');
    },[]);

    //cada vez que cambie el formulario
    useEffect(()=>{
        console.log('formulario cambio');
    },[formState]);

    const handleInputChange= ({target})=>{
        console.log(target.value);
        console.log(target.name);

        setFormState({
            ...formState,
            [target.name]:target.value
        });

    }

    return (
        <>
            <h1>Use Effect</h1>
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

            {(name ==='123') &&  <Message/> }  

        </>
    );
}