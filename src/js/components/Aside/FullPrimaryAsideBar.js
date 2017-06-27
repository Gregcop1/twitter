import React from 'react';
import ShortProfile from './ShortProfile';
import Trend from './Trend';

const FullPrimaryAsideBar = ({ showProfile }) => (
    <aside className="column aside-primary">
        {showProfile && <ShortProfile/>}
        <Trend/>
    </aside>
);

export const withFullPrimaryAsideBar = (showProfile) => (WrappedComponent) => (props) => (
    <div className="transparent-container">
        <FullPrimaryAsideBar showProfile={showProfile}/>
        <WrappedComponent {...props}/>
    </div>
);

export default FullPrimaryAsideBar;
