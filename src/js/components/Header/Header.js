import React from 'react';
import Nav from './Nav';
import Logo from './Logo';
import '../../../stylesheets/components/header.css';

const Header = () => (
    <header className="main-header">
        <div className="container">
            <Nav />
            <p className="logo">
                <Logo clssName="logo" />
            </p>
            <search />
        </div>
    </header>
);

export default Header;
