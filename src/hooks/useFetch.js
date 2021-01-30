import { useState, useEffect, useRef } from "react"

export const UseFetch = (url) => {

    const isMounted = useRef(true)

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
        msgError: null
    });


    useEffect(()=>{

        return ()=>{
            isMounted.current=false;
        }
    },[])

    useEffect(() => {

        setState({ isLoading: true, data: null, msgError: null, hasError: false });

        fetch(url).then(resp => resp.json())
            .then(result => {

                if(isMounted.current){
                    setState({ data: result, isLoading: false, hasError: false, msgError: null });
                }
            })
            .catch(err => {
                if(isMounted.current){
                    setState({ data: null, isLoading: false, hasError: true, msgError:'ocurrio un error' });
                }

            })

    }, [url]);



    return state;

}