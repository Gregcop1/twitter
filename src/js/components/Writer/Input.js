import React from 'react';
import { connect } from 'react-redux';
import gravatarHelper from '../../helpers/gravatar';

const Input = ({user, dispatch, ...props}) => (
    <div className="writer-block--fold">
        <img src={ gravatarHelper.getAvatar(user.email) } alt={user.name} className="avatar" />
        <input type="text" onChange={() => undefined } {...props} />
        <i className="fa fa-picture-o"/>
    </div>
);

const mapStateToProps = ({ tweets }) => ({
    user: tweets.author
});

export default connect(mapStateToProps)(Input);
