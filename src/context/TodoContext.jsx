import React, { createContext, useReducer, useContext } from 'react';

const TodoContext = createContext();

const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.payload];
        case 'UPDATE_TODO':
            return state.map(todo => todo.id === action.payload.id ? action.payload : todo);
        case 'DELETE_TODO':
            return state.filter(todo => todo.id !== action.payload);
        default:
            return state;
    }
};

export const TodoProvider = ({ children }) => {
    const [todos, dispatch] = useReducer(todoReducer, []);

    return (
        <TodoContext.Provider value={{ todos, dispatch }}>
            {children}
        </TodoContext.Provider>
    );
};

export const useTodos = () => useContext(TodoContext);
