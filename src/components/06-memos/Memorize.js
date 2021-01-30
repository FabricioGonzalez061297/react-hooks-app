import React, { useState } from 'react';
import { useCounter } from './../../hooks/useCounter';

import { Small } from './Small';

import './memorize.css';

export const Memorize = () => {

    const { state: counter, increment } = useCounter();

    const [show, setShow] = useState(false);

    return (
        <>
            <h1>Use memo</h1>

            <hr></hr>

            <p>Counter: <Small value={counter} />  </p>

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