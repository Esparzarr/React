import React, { useEffect, useReducer } from 'react';
import { useForm } from '../hooks/useForm';
import { todoReducer } from './todoReducer';

import  './styles.css';
import { TodoList } from './TodoList';

const init = () => {
    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender React',
    //     done: false
    // }]

    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init)
    const [{descripcion}, handleInputChange, reset] = useForm({
        descripcion: ''
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleDelete = (todoId) => {

        const action = {
            type: 'delete',
            payload: todoId
        }
        dispatch(action);
    }

    const handleToggle = (todoId) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        if(descripcion.trim().length <= 1){
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: descripcion,
            done: false
        };

        const action = {
            type: 'add',
            payload: newTodo
        }

        dispatch(action);
        reset();
    }

    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr />

            <div>

                <div >
                   <TodoList
                    todos={todos}
                    handleDelete={handleDelete}
                    handleToggle ={handleToggle} 
                   />
                </div>
                <div>
                    <h4>Agregar todo</h4>
                    <hr />

                    <form onSubmit={handleSubmit}>
                        <input value={descripcion} onChange={handleInputChange} type="text" name="descripcion" className="form-control" placeholder="Aprender..." autoComplete="off" /><br /><br />
                        <button type="submit">Agregar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
