import React from 'react';
import { branch, renderComponent, renderNothing } from 'recompose';

const TwitterLogo = () => <i className="fa fa-twitter fa-2x fa-fw" />;
const Spinner = () => <i className="fa fa-spinner fa-pulse fa-2x fa-fw" />;

const withLogo = branch(
    () => false,
    renderComponent(Spinner),
    renderComponent(TwitterLogo)
);

export default withLogo(renderNothing());
