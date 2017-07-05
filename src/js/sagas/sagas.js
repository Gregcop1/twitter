import { put, takeLatest } from 'redux-saga/effects';
import { fetchTweets, fetchTweetsSuccess, fetchTweetsFailure, FETCH_TWEETS } from '../actions';
import tweetsHelper from '../helpers/tweets';

function* fetch() {
    try {
        fetchTweets();
        const tweets = tweetsHelper.generateTweets(20);
        yield put(fetchTweetsSuccess(tweets));
    } catch (e) {
        yield put(fetchTweetsFailure(e));
    }
}

function* mySaga() {
    yield takeLatest(FETCH_TWEETS, fetch)
}

export default mySaga;
