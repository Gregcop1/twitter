import React from 'react';
import ShortProfile from './ShortProfile';

const FullPrimaryAsideBar = () => (
    <aside className="column aside-primary">
        <ShortProfile/>
    </aside>
);

export const withFullPrimaryAsideBar = (WrappedComponent) => (props) => (
    <div>
        <FullPrimaryAsideBar/>
        <WrappedComponent {...props}/>
    </div>
);

export default FullPrimaryAsideBar;
