import { UseFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

import './Layout.css'
import { useLayoutEffect, useRef } from 'react';

export const Layout = () => {

    const { state: contador, increment } = useCounter(8);
    const { data, isLoading } = UseFetch(`https://www.breakingbadapi.com/api/quotes/${contador}`);

    const {  quote } = !!data && data[0];


    useLayoutEffect(()=>{
        console.log(pTag.current.getBoundingClientRect());
    },[quote]);

    const pTag= useRef();

    return (
        <>
            <h1>Layout Effect</h1>
            <hr></hr>


            <blockquote className="blockquote text-right" >
                <p 
                ref={pTag}
                className="nb-0"> {quote} </p>
            </blockquote>



            <br></br>

            <button
                disabled={isLoading}
                onClick={() => increment(1)}
                className="btn btn-primary"
                type="button"
            >Siguiente.</button>

        </>
    );
}