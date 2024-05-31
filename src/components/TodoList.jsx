import React from 'react';
import { useTodos } from '../context/TodoContext';

const TodoList = () => {
    const { todos, dispatch } = useTodos();

    return (
        <ul className="todo-list">
            {todos.length === 0 ? (
                <p>Add your ToDo</p>
            ) : (
                todos.map(todo => (
                    <li key={todo.id} className="todo-item">
                        <div>
                            <h3>{todo.description}</h3>
                            <p>Due: {todo.dueDate}</p>
                            <p>Priority: {todo.priority}</p>
                            <p>Notes: {todo.notes}</p>
                        </div>
                        <button onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}>Delete</button>
                    </li>
                ))
            )}
        </ul>
    );
};

export default TodoList;

