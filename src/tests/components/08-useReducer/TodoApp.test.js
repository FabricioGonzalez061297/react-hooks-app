import { mount, shallow } from "enzyme";
import {act} from '@testing-library/react';
import { TodoApp } from "../../../components/08-useReducer/TodoApp";
import { demoTodos } from "../../fixtures/demoTodos";

describe('Pruebas en <TodoApp&>',()=>{

    beforeEach(()=>{

        Storage.prototype.setItem= jest.fn(()=>{});
    });


    test('Debe de mostrarse correctamente', () => {
       
        const wrapper= shallow(
            <TodoApp/>
        );

        expect(wrapper).toMatchSnapshot();
        
    });


    test('Debe de agregar un todo', () => {
       
        //se utiliza cuando ya se quiere probar toda la app y no solo un componente
        const wrapper= mount(
            <TodoApp/>
        );

        act(()=>{

            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]); 
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[1]); 

            
        });
        expect(wrapper.find('h1').text().trim()).toBe('TodoApp 2');
        expect(localStorage.setItem).toHaveBeenCalledTimes(2);

    });

    test('debe de eliminar un TODO', () => {
        const wrapper= mount(
            <TodoApp/>
        );

        wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);

        expect(wrapper.find('h1').text().trim()).toBe('TodoApp 1');

        wrapper.find('TodoList').prop('handleDelete')(demoTodos[0].id);

        expect(wrapper.find('h1').text().trim()).toBe('TodoApp 0');


    })
    
    

})