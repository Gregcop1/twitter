export const ADD_TWEET = 'tweets/add';
export const FETCH_TWEETS = 'tweets/fetch';
export const FETCH_TWEETS_SUCCESS = 'tweets/fetch_success';
export const FETCH_TWEETS_FAILURE = 'tweets/fetch_failure';

export const addTweet = (message) => ({ type: ADD_TWEET, message });
export const fetchTweets = (params) => ({ type: FETCH_TWEETS, params });
export const fetchTweetsSuccess = (response) => ({ type: FETCH_TWEETS_SUCCESS, response });
export const fetchTweetsFailure = (error) => ({ type: FETCH_TWEETS_FAILURE, error });
