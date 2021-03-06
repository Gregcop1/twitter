import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import gravatarHelper from '../../helpers/gravatar';
import '../../../stylesheets/components/short-profile.css';

const ShortProfile = ({ user }) => (
    <div className="block short-profile">
        <div className="profile-infos">
            <img src={ gravatarHelper.getAvatar(user.email) } alt={user.name} className="avatar" />
            <p className="profile-metas">
                { user.name }
                <span className="profile-account">{ user.account }</span>
            </p>
            <div className="profile-relation">
                <p className="col col-30">
                    Tweets
                    <Link to="/my-tweets">{ user.tweetCount }</Link>
                </p>
                <p className="col col-40">
                    Abonnements
                    <Link to="/my-tweets">{ user.subscriber }</Link>
                </p>
                <p className="col col-30">
                    Abonnés
                    <Link to="/my-tweets">{ user.subscription }</Link>
                </p>
            </div>
        </div>
    </div>
);

const mapStateToProps = ({tweets}) => ({ user: tweets.author });

export default connect(mapStateToProps)(ShortProfile);
