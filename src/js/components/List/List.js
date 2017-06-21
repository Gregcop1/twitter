import React from 'react';
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { fetchTweets } from '../../actions';
import ListView from './ListView';

const List = ({ tweets }) => <ListView tweets={tweets} />;

const mapStateToProps = ({ tweets }, { own }) => ({
    tweets: own ? tweets.items.filter((tweet) => tweets.author.email === tweet.author.email) : tweets.items
});
const mapDispatchToProps = (dispatch) => ({ fetch: () => dispatch(fetchTweets()) });
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
