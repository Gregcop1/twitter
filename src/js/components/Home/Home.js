import React from 'react';
import { compose } from 'recompose';
import { withFullPrimaryAsideBar } from '../Aside/FullPrimaryAsideBar';
import { withFullSecondaryAsideBar } from '../Aside/FullSecondaryAsideBar';
import Writer from '../Writer/Writer';
import List from '../List/List';

const Home = ({ tweets }) => (
    <div className="column main-content">
        <Writer />
        <List />
    </div>
);

const enhance = compose(
    withFullPrimaryAsideBar,
    withFullSecondaryAsideBar
);

export default enhance(Home);
