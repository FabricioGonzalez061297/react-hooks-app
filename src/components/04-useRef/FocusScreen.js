import React, { useRef } from 'react';

import './FocusSceen.css';
export const FocusScreen=()=>{
   
    const inputRef= useRef();

    const handleClick=()=>{
        inputRef.current.select();
    }
   
    return (
        <>
            <h1>Focus Screen</h1>
            <br></br>

            <input
            ref={inputRef}
             className="form-control"
             placeholder="su nombre"
            />
            <br></br>

            <button 
             className="btn btn-primary"
             onClick={handleClick}
            >Focus</button>

        </>
    );
};