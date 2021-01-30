import React from 'react';

import './multipleCustomHooks.css';
import { UseFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

export const MultipleCustomHooks = () => {

    const {state:contador,increment} = useCounter(8);
    const { data, isLoading } = UseFetch(`https://www.breakingbadapi.com/api/quotes/${contador}`);

    const {author,quote} = !!data && data[0];


    return (
        <>
            <h1>Breakingbad quotes</h1>
            <hr></hr>

            {
                isLoading
                    ?
                    (
                        <div className="alert alert-info text-center">
                            loading....
                        </div>
                    )
                    :
                    (
                        <blockquote className="blockquote text-right" >
                            <p className="mb-0"> {quote} </p>
                            <footer className="blockquote-footer"> {author} </footer>
                        </blockquote>

                    )
            }

            <br></br>

            <button
                disabled={isLoading}
                onClick={()=>increment(1)}
                className="btn btn-primary"
                type="button"
            >Siguiente.</button>

        </>
    );
}