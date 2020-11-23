import React from 'react'

export const TodoListItem = ({ todo, index, handleDelete, handleToggle }) => {
    return (
        <li key={todo.id}>
            <p className={`${todo.id && 'complete'}`} onClick={() => handleToggle(todo.id)}>{index + 1}. {todo.desc}</p>
            <button onClick={() => handleDelete(todo.id)}>Borrar</button>
        </li>
    )
}
