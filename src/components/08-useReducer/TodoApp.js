import React, { useReducer, useEffect } from 'react';
import { todoReducer } from './todoReducer';

import './styles.css';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';


const init = () => {

    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

   
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);



    const handleDelete = (todoId) => {
        if (!todoId) return;

        const action = {
            type: 'delete',
            payload: todoId
        }

        dispatch(action);
    }

    const handleToggle = (todoId) => {
        dispatch({ type: 'toggle', payload: todoId });
    }

    const handleAddTodo= (newTodo)=>{
        dispatch({
            type: 'add',
            payload: newTodo
        });
    }

 

    return (
        <div>
            <h1>TodoApp {todos.length} </h1>
            <hr></hr>


            <div className="row" >

                <div
                    className="col-md-7 col-sm-12"
                >
                    <TodoList handleDelete={handleDelete} handleToggle={handleToggle} todos={todos} />

                </div>


                <div className="col-md-5 col-sm-12" >

                    <TodoAdd handleAddTodo={handleAddTodo} />
                </div>

            </div>


        </div>
    )
}
