import React, { useState } from 'react';
import { useTodos } from '../context/TodoContext';

const TodoForm = ({ editTodo }) => {
    const { dispatch } = useTodos();
    const [todo, setTodo] = useState(editTodo || {
        description: '',
        dueDate: '',
        priority: 'low',
        notes: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTodo({
            ...todo,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editTodo) {
            dispatch({ type: 'UPDATE_TODO', payload: todo });
        } else {
            dispatch({ type: 'ADD_TODO', payload: { ...todo, id: Date.now() } });
        }
        setTodo({
            description: '',
            dueDate: '',
            priority: 'low',
            notes: '',
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="description"
                placeholder="Task Description"
                value={todo.description}
                onChange={handleChange}
                required
            />
            <input
                type="date"
                name="dueDate"
                value={todo.dueDate}
                onChange={handleChange}
                required
            />
            <select name="priority" value={todo.priority} onChange={handleChange}>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
            <textarea
                name="notes"
                placeholder="Additional Notes"
                value={todo.notes}
                onChange={handleChange}
            ></textarea>
            <button type="submit">{editTodo ? 'Update Todo' : 'Add Todo'}</button>
        </form>
    );
};

export default TodoForm;
