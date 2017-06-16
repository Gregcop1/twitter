import React from 'react';
import Header from '../Header/Header';
import '../../stylesheets/components/main-layout.css';

const MainLayout = ({ children, ...props }) => (
    <div>
        <Header />
        <div className="main-container">
            <div className="container">
                {children}
            </div>
        </div>
    </div>
);

export const withMainLayout = (WrappedComponent) => (props) => (
    <MainLayout>
        <WrappedComponent {...props}/>
    </MainLayout>
);

export default MainLayout;
