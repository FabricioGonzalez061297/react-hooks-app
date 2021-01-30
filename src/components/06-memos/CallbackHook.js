import React, { useState,useCallback,useEffect } from 'react';

import './memorize.css';
import { ShowIncrement } from './ShowIncrement';

export const  CallbackHook=()=>{

    const [counter,setCounter]= useState(10);

    // const increment= ()=>{
    //     setCounter(counter+1);
    // }

    const increment= useCallback(
        (num) => {
            setCounter(c=>c+num)
        },
        [setCounter]
    );


    useEffect(() => {
       //se usa cuando la dependencia es una función para que no tenga una nueva versión en memoria
    }, [increment])

    return (
        <>
            <h1>UseCallback Hook  {counter} </h1>
            <br></br>

            <ShowIncrement increment={increment} />
        </>
    );
}