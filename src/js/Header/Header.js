import React from 'react';
import '../../stylesheets/components/header.css';

const Header = () => (
    <header className="main-header">
        <div className="container">
            <nav></nav>
            <p className="logo fa fa-twitter" />
            <search />
        </div>
    </header>
);

export default Header;
