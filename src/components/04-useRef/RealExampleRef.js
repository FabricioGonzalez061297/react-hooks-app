import React, { useState } from 'react';
import {MultipleCustomHooks} from './../03-examples/MultipleCustomHooks';

import './FocusSceen.css';

export const RealExampleRef=()=>{


    const [show,setShow] = useState(false);


    return (
        <>
            <h1>Real Example useRef</h1>
            <hr></hr>
           
            {show && <MultipleCustomHooks/> }

            <br></br>
            <button
            className="btn btn-info mt-3 txt-center"
            onClick={()=>setShow(!show)}
            >Show/Hide</button>
             

        </>
    );
}