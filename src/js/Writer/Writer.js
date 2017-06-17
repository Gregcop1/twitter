import React from 'react';
import { branch, compose, renderComponent, renderNothing, withProps, withState } from 'recompose';
import Input from './Input';
import Textarea from './Textarea';
import '../../stylesheets/components/writer-block.css';

const input = ({ toggleFold, value }) => <Input value={value} onClick={() => toggleFold(x => (!x))} />;
const textarea = ({ value }) => <Textarea placeholder={value} />;

const withToggle = withState('fold', 'toggleFold', true);
const withPlaceholder = withProps(() => ({ value: 'Quoi de neuf ?' }))
const switchFold = branch(
    ({fold}) => fold,
    renderComponent(input),
    renderComponent(textarea),
);

const Content = compose(
    withPlaceholder,
    withToggle,
    switchFold
)(renderNothing());

const Writer = () => (
    <div className="block writer-block">
        <Content />
    </div>
);

export default Writer;
