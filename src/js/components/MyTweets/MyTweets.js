import React from 'react';
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { fetchTweets } from '../../actions';
import { withMainLayout } from '../Layout/Main';
import { withFullPrimaryAsideBar } from '../Aside/FullPrimaryAsideBar';
import List from '../List/List';

const Home = ({ tweets }) => (
    <div className="column main-content">
        <List tweets={tweets} />
    </div>
);

const mapStateToProps = ({ tweets }) => ({
    tweets: tweets.items.filter((tweet) => tweets.author.email === tweet.author.email)
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

export default compose(
    withMainLayout,
    withFullPrimaryAsideBar,
    enhance
)(Home);
