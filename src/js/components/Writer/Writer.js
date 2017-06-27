import React from 'react';
import { branch, compose, renderComponent, renderNothing, withProps, withState } from 'recompose';
import Input from './Input';
import Textarea from './Textarea';
import '../../../stylesheets/components/writer-block.css';

const InputView = ({ placeholder, toggleFoldStatus }) => <Input onClick={() => toggleFoldStatus((x) => (!x))} value={placeholder}/>;
const TextareaView = ({ placeholder, toggleFoldStatus }) => <Textarea placeholder={placeholder} onLeave={() => toggleFoldStatus((x) => (!x))}/>;


const withPlaceholder = withProps(() => ({placeholder: "Un truc à dire ?"}));

const withFoldStatus = withState('fold', 'toggleFoldStatus', true);

const switchFoldStatus = branch(
    (props) => props.fold,
    renderComponent(InputView),
    renderComponent(TextareaView),
);

const enhance = compose(
    withPlaceholder,
    withFoldStatus,
    switchFoldStatus,
);

const Content = enhance(renderNothing())

const Writer = (props) => (
    <div className="block writer-block">
        <Content {...props}/>
    </div>
);

export default Writer;
