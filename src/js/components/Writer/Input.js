import React from 'react';

const Input = (props) => (
    <div className="writer-block--fold">
        <input type="text" onChange={() => undefined } {...props} />
        <i className="fa fa-picture-o"/>
    </div>
);

export default Input;
