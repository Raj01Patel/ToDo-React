import React from 'react';
import { TodoProvider } from './context/TodoContext';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Header from './components/Header';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';
import './styles/DarkMode.css';
import './styles/LightMode.css';

function App() {
    const { theme } = useTheme();

    return (
        <div className={`app ${theme}`}>
            <Header />
            <main>
                <TodoForm />
                <TodoList />
            </main>
        </div>
    );
}

const AppWrapper = () => (
    <ThemeProvider>
        <TodoProvider>
            <App />
        </TodoProvider>
    </ThemeProvider>
);

export default AppWrapper;
