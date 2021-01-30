import { renderHook ,act} from "@testing-library/react-hooks";
import { UseForm} from '../../hooks/useForm';
describe('Pruebas en hook useForm',()=>{

    const initialForm={
        name:'fabricio',
        email:'fabricio@gmail.com'
    };

    test('debe de regresar un formulario por defecto', () => {
        const {result }= renderHook(()=>UseForm(initialForm));
        const [values,handleInputChange,reset]= result.current;
        expect(values).toEqual(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');

    });


    test('debe de cambiar el valor del formulario (cambiar name)', () => {
        const {result} = renderHook(()=>UseForm(initialForm));

        const [,handleInputChange] = result.current;

        act(()=>{
            handleInputChange({target:{name:'name',value:'jorge'}});
        });

        const [values]= result.current;

        expect(values['name']).toBe('jorge');

    });

    test('debe de re-establecer el formulario con reset', () => {
        const {result} = renderHook(()=>UseForm(initialForm));

        const [,handleInputChange,reset] = result.current;

        act(()=>{
            handleInputChange({target:{name:'name',value:'jorge'}});
            reset();
        });

        const [values]= result.current;

        expect(values).toEqual(initialForm);

    });
    
    
    
});