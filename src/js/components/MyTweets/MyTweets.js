import React from 'react';
import List from '../List/List';
import { withFullPrimaryAsideBar } from '../Aside/FullPrimaryAsideBar';

const MyTweets = ({ tweets }) => (
    <div className="column main-content">
        <List tweets={tweets} own />
    </div>
);

export default withFullPrimaryAsideBar(false)(MyTweets);
