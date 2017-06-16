import React from 'react';
import { withMainLayout } from '../Layout/Main';

const App = (props) => (
    <h1 {...props}/>
);

export default withMainLayout(App);
