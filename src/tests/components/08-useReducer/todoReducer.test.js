import { todoReducer } from '../../../components/08-useReducer/todoReducer';
import { demoTodos } from '../../fixtures/demoTodos';


describe('pruebas en todoReducer', () => {

    test('debe de retornar el estado por defecto', () => {
        const state = todoReducer(demoTodos,{});
        expect(state).toEqual(demoTodos);
    });

    test('debe de agregar un todo', () => {

        const newTodo= {
            id: 3,
            desc: 'apreder aws',
            done: false
        }

        const action={
            payload:newTodo,
            type:'add'
        }

        const state= todoReducer(demoTodos,action);

        expect(state.length).toBe(3);
        
        const todoAdded= state.filter(t=>t.id===newTodo.id);
        expect(todoAdded[0]).toEqual(newTodo);

    });
    
    test('debe de borrar un todo', () => {
       const action={
           payload:1,
           type:'delete'
       } 
       const state= todoReducer(demoTodos,action);
       expect(state.length).toBe(1);
    });


    test('debe de hacer el toogle del todo', () => {
        
        const action={
            payload:1,
            type:'toggle'
        } 
        const state = todoReducer(demoTodos,action);

        const todoUpdated= state.filter(t=>t.id===action.payload);

        expect(todoUpdated[0].done).toBe(true);

    });
    
    


});