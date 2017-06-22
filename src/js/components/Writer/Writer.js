import React from 'react';
import gravatarHelper from '../../helpers/gravatar';
import ActionBar from './ActionBar';
import '../../../stylesheets/components/writer-block.css';

class Writer extends React.Component {
    static defaultProps = {
        user: {
            name: 'Grégory Copin',
            email: 'gregcop1@gmail.com',
            account: '@gregcop1'
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            fold: true,
            value: ''
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.fold !== this.state.fold) {
            this.input.focus();
        }
    }

    toggleFold = () => {
        this.setState({ fold: false });
    };

    changeValue = (event) => {
        this.setState({ value: event.target.value });
    };

    render() {
        const { user } = this.props;
        const { fold, value } = this.state;

        return (
            <div className="block writer-block">
                {fold && <div className="writer-block--fold">
                    <img src={ gravatarHelper.getAvatar(user.email) } alt={user.name} className="avatar"/>
                    <input type="text" onChange={() => undefined } onClick={this.toggleFold} value="Quoi de neuf ?"/>
                    <i className="fa fa-picture-o"/>
                </div>}

                {!fold && <div className="writer-block--unfold">
                    <textarea
                        ref={(input) => this.input = input}
                        rows="3"
                        onChange={this.changeValue}
                        placeholder="Quoi de neuf ?"/>
                    <ActionBar length={ value.length || 0 } />
                </div>}
            </div>
        );
    }
}

export default Writer;
