import React from 'react';
import { compose } from 'recompose';
import { withMainLayout } from '../Layout/Main';
import { withFullPrimaryAsideBar } from '../Aside/FullPrimaryAsideBar';
import List from '../List/List';

const Home = ({ tweets }) => (
    <div className="column main-content">
        <List tweets={tweets} own />
    </div>
);

export default compose(
    withMainLayout,
    withFullPrimaryAsideBar,
)(Home);
