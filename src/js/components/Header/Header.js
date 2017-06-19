import React from 'react';
import '../../../stylesheets/components/header.css';

const Header = () => (
    <header className="main-header">
        <div className="container">
            <nav></nav>
            <p className="logo">
                <i className="fa fa-twitter fa-2x fa-fw" />
                {false && <i className="fa fa-spinner fa-pulse fa-2x fa-fw" />}
            </p>
            <search />
        </div>
    </header>
);

export default Header;