import React from 'react';

const Input = (props) => (
    <div className="writer-block--fold">
        <input type="text" onChange={() => undefined } {...props} />
        <i className="fa fa-play"/>
    </div>
);

export default Input;
