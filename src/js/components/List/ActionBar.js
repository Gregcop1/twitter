import React from 'react';
import classnames from 'classnames';

const ActionBar = ({ answer, like, retweet, answered, liked, retweeted }) => (
    <p className="list-item-actions">
        <button className={classnames('fa fa-comment-o fa-fw answer', {active: answered})} >{ answer }</button>
        <button className={classnames('fa fa-retweet fa-fw retweet', {active: retweeted})} >{ retweet }</button>
        <button className={classnames('fa fa-fw like', {active: liked, 'fa-heart': liked, 'fa-heart-o': !liked})} >{ like }</button>
        <button className="fa fa-envelope-o fa-fw pm" />
    </p>
);

export default ActionBar;
