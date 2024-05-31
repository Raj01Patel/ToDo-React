import React from 'react';
import ToggleTheme from './ToggleTheme';


const Header = () => {
    return (
        <header>
            <h1 className="header-actions">Todo Application</h1>
            <ToggleTheme/>
        </header>
    );
};

export default Header;
