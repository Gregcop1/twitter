import React from 'react';
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { fetchTweets } from '../../actions';
import ListItem from './ListItem';

const List = ({ tweets, fetch }) => (
    <div className="tweet-list">
        {tweets.map((tweet, index) => (
            <ListItem key={index} tweet={tweet} />
        ))}
    </div>
);

const mapStateToProps = ({ tweets }) => ({
    tweets: tweets.items
});
const mapDispatchToProps = (dispatch) => ({
    fetch: () => dispatch(fetchTweets())
});
const withStore = connect(mapStateToProps, mapDispatchToProps);

const withMount = lifecycle({
   componentDidMount() {
       this.props.fetch();
   }
});

const enhance = compose(
    withStore,
    withMount
);

export default enhance(List);
