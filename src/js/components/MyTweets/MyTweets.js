import React from 'react';
import { withFullPrimaryAsideBar } from '../Aside/FullPrimaryAsideBar';
import List from '../List/List';

const Home = ({ tweets }) => (
    <div className="column main-content">
        <List tweets={tweets} own />
    </div>
);

export default withFullPrimaryAsideBar(Home);
