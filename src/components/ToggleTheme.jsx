import React from 'react';
import { useTheme } from '../context/ThemeContext';


const ToggleTheme = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button className="toggle-theme" onClick={toggleTheme}>
            Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
    );
};

export default ToggleTheme;
