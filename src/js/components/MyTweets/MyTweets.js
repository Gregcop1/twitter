import React from 'react';
import { compose } from 'recompose';
import { withMainLayout } from '../Layout/Main';
import { withFullPrimaryAsideBar } from '../Aside/FullPrimaryAsideBar';
import Writer from '../Writer/Writer';
import List from '../List/List';

const Home = (props) => (
    <div className="column main-content">
        <Writer />
        <List />
    </div>
);

export default compose(
    withMainLayout,
    withFullPrimaryAsideBar,
)(Home);
