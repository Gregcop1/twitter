import React from 'react';
import ListItem from './ListItem';

const ListView = ({ tweets }) => (
    <div className="tweet-list">
        {tweets && tweets.map((tweet, index) => (
            <ListItem key={index} tweet={tweet} />
        ))}
    </div>
);

export default ListView;
