import { FETCH_TWEETS_SUCCESS } from '../actions';
import tweetsHelper from '../helpers/tweets';

const defaultValue = {
    items: tweetsHelper.generateTweets(20),
};

const tweetsReducers = (state = defaultValue, action) => {
    switch (action.type) {
        case FETCH_TWEETS_SUCCESS:
            return {
                ...state,
                items: [
                    ...state.items,
                    ...action.response
                ]
            };
        default: return state;
    }
};

export default tweetsReducers

