import React from 'react';
import { compose, lifecycle, withState } from 'recompose';
import ActionBar from './ActionBar';

const Textarea = ({ length, setLength, ...props }) => (
    <div className="writer-block--unfold">
        <textarea
            rows="3"
            ref={(input) => this.input = input}
            onChange={(e) => setLength(e.target.value.length)} {...props}/>
        <ActionBar length={ length } />
    </div>
);

const withLifecycle = lifecycle({
    componentDidMount: () => {
        this.input.focus()
    }
});
const withLength = withState('length', 'setLength', 0);

export default compose(
    withLifecycle,
    withLength
)(Textarea);
