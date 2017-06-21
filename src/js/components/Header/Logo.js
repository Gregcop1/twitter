import React from 'react';
import { branch, compose, renderComponent, renderNothing } from 'recompose';
import { connect } from 'react-redux';

const TwitterLogo = () => <i className="fa fa-twitter fa-fw" />;
const Spinner = () => <i className="fa fa-spinner fa-pulse fa-fw" />;

const withLogo = branch(
    ({ loading }) => (loading),
    renderComponent(Spinner),
    renderComponent(TwitterLogo)
);

const mapStateToProps = ({ tweets }) => ({ loading: tweets.loading });
const withPreloader = connect(mapStateToProps);

const enhance = compose(
    withPreloader,
    withLogo
);

export default enhance(renderNothing());
