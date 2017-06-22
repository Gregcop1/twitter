import React from 'react';
import { compose, lifecycle, withState } from 'recompose';
import { connect } from 'react-redux';
import { addTweet } from '../../actions';
import ActionBar from './ActionBar';

const Textarea = ({ addTweet, onLeave, setValue, value, ...props }) => {
    const submit = () => {
        addTweet(value);
        setValue('');
        blur(true);
    },
    blur = (force = false) => {
        if (true === force || '' === value) {
            onLeave();
        }
    };

    return (
        <div className="writer-block--unfold">
            <textarea
                rows="3"
                ref={(input) => this.input = input}
                onChange={(e) => setValue(e.target.value)}
                onBlur={blur}
                value={value}
                {...props}/>
            <ActionBar submit={ submit } length={ value.length || 0 } />
        </div>
    );
};

const withLifecycle = lifecycle({
    componentDidMount: () => {
        this.input.focus()
    }
});
const withValue = withState('value', 'setValue', '');

const mapDispatchToProps = (dispatch) => ({
    addTweet: (message) => dispatch(addTweet(message))
});

export default compose(
    connect(undefined, mapDispatchToProps),
    withLifecycle,
    withValue
)(Textarea);
