
import React from 'react';
import { useCounter } from '../../hooks/useCounter';

import './counter.css';

export const CounterWithCustomHook =()=>{

    const {state,increment,decrement,reset}= useCounter();



    return (
        <>
            <h1>Counter with CustomHook {state} </h1>
            <hr></hr>

            <button 
            onClick={()=>increment(10)}
            className="btn"
             >+1</button>
            <button
            onClick={()=>decrement(15)}
            className="btn" 
            >-1</button>
             <button
            onClick={reset}
            className="btn" 
            >Reset</button>

        </>
    );
}