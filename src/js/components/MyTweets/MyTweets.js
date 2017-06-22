import React from 'react';
import List from '../List/List';

const MyTweets = ({ tweets }) => (
    <div className="column main-content">
        <List tweets={tweets} own />
    </div>
);

export default MyTweets;
