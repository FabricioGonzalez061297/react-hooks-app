import React from 'react'

import {UseForm } from './../../hooks/useForm';

export const TodoAdd = ({handleAddTodo}) => {

    const [{ description }, handleInputChange, reset] = UseForm({
        description: ''
    });

    const handleSubmit =(e)=>{
        e.preventDefault();

        if (description.trim().length <= 0) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc:description,
            done:false
        }

        handleAddTodo(newTodo);
        reset();
    }

    return (
        <>

            <h5>Agregar TODO</h5>
            <hr></hr>

            <form onSubmit={handleSubmit} >

                <input
                    type="text"
                    name="description"
                    placeholder="Aprender ..."
                    autoComplete="off"
                    className="form-control"
                    onChange={handleInputChange}
                    value={description}

                />

                <div className="d-grid gap-2">
                    <button
                        type="submit"
                        className="btn btn-outline-primary mt-1 "
                    >
                        Agregar
                        </button>
                </div>


            </form>


        </>
    )
}
