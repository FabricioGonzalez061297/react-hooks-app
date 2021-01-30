import React, { useState, useMemo } from 'react';
import { useCounter } from './../../hooks/useCounter';
import {procesoPesado} from './../../helpers/procesoPesado';


import './memorize.css';

export const Memohook = () => {

    const { state: counter, increment } = useCounter(5000);
    const [show, setShow] = useState(false);
    const memoProcesoPesado= useMemo(()=>procesoPesado(counter),[counter]);

    return (
        <>
            <h1>UseMemo hook</h1>

            <hr></hr>

            <p> {memoProcesoPesado} </p>

            <h3> Counter : {counter} </h3>


            <button
                type="button"
                onClick={() => increment(1)}
                className="btn btn-secondary mr-3"
            >Increment</button>
            <hr></hr>
            <button
                type="button"
                onClick={()=>{setShow(!show)}}
                className="btn btn-outline-secondary ml-3"
            >Show/Hidden</button>

        </>
    );
};