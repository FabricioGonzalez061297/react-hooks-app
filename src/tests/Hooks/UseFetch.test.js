import { renderHook } from "@testing-library/react-hooks";
import {UseFetch} from './../../hooks/useFetch';

describe('probando useFetch',()=>{


    test('debe de retornar la información por defecto', () => {
        const {result} = renderHook(()=>UseFetch(`https://www.breakingbadapi.com/api/quotes/${1}`));

        const {data,isLoading,hasError} = result.current;
//es sincorno no espera los resultados
        expect(data).toBe(null);
        expect(isLoading).toBe(true);
        expect(hasError).toBe(false);


    });

    test('debe de tener la info deseada', async () => {
        const {result,waitForNextUpdate} = renderHook(()=>UseFetch(`https://www.breakingbadapi.com/api/quotes/${1}`));
        await waitForNextUpdate();

        const {data,isLoading,hasError} = result.current;


        expect(data.length).toBe(1);
        expect(isLoading).toBe(false);
        expect(hasError).toBe(false);


    });
    
    test('debe de manejar el error', async () => {
        const {result,waitForNextUpdate} = renderHook(()=>UseFetch(`https://reqres.in/apid/users?page=2`));
        await waitForNextUpdate();

        const {data,isLoading,hasError,msgError} = result.current;

        expect(data).toBe(null);
        expect(isLoading).toBe(false);
        expect(hasError).toBe(true);
        expect(msgError.trim()).toBe('ocurrio un error');


    });
});