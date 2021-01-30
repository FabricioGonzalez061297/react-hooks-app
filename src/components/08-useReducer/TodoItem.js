import React from 'react'

export const TodoItem = ({todo,handleToggle,handleDelete,i}) => {
    return (
        <li
            className="list-group-item"
             >
            <p onClick={() => handleToggle(todo.id)} className={`${todo.done && 'complete'}`} > {i + 1}.  {todo.desc}</p>

            <button
                onClick={() => handleDelete(todo.id)}
                className="btn btn-danger mt-2"
            >Borrar</button>
        </li>
    )
}
