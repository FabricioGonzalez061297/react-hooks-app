import { shallow } from "enzyme"
import {TodoAdd} from './../../../components/08-useReducer/TodoAdd';

const handleAddTodo= jest.fn();

describe('Pruebas en <TodoAdd/>',()=>{

    test('debe de mostrarse correctamente', () => {
      
        const wrapper= shallow(
        <TodoAdd
            handleAddTodo={handleAddTodo}
        />);

        expect(wrapper).toMatchSnapshot();
        
    });

    test('No debe de llamar addTODO', () => {
      
        const wrapper= shallow(
        <TodoAdd
            handleAddTodo={handleAddTodo}
        />);

        const formSubmit= wrapper.find('form').prop('onSubmit');

        formSubmit({preventDefault(){}});
        
        expect(handleAddTodo).toHaveBeenCalledTimes(0);

    });

    test('debe de llamar la funcion handleAddTodo', () => {
      
        const value= 'Aprender react';

        const wrapper= shallow(
        <TodoAdd
            handleAddTodo={handleAddTodo}
        />);

        wrapper.find('input').simulate('change',{
            target:{
                value,
                name:'description'
            }
        });

        const formSubmit= wrapper.find('form').prop('onSubmit');

        formSubmit({preventDefault(){}});
        
        expect(handleAddTodo).toHaveBeenCalledTimes(1);
        expect(handleAddTodo).toHaveBeenCalledWith({
            id:expect.any(Number),
            desc:value,
            done:false
        });

        expect(wrapper.find('input').prop('value')).toBe('');

    });
    
})