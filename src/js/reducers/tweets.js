import { ADD_TWEET, FETCH_TWEETS, FETCH_TWEETS_SUCCESS } from '../actions';

const defaultValue = {
    author: {
        name: 'Grégory Copin',
        email: 'gregcop1@gmail.com',
        account: '@gregcop1',
        tweetCount: 500 + Math.ceil(Math.random() * 200),
        subscriber: Math.ceil(Math.random() * 200),
        subscription: Math.ceil(Math.random() * 200)
    },
    items: [],
    loading: false,
};

const tweetsReducers = (state = defaultValue, action) => {
    switch (action.type) {
        case ADD_TWEET:
            return {
                ...state,
                author: {
                    ...state.author,
                    tweetCount: state.author.tweetCount + 1
                },
                items: [
                    {
                        author: state.author,
                        date: new Date().getTime(),
                        message: action.message,
                    },
                    ...state.items
                ]
            };
        case FETCH_TWEETS:
            return {
                ...state,
                loading: true
            };
        case FETCH_TWEETS_SUCCESS:
            return {
                ...state,
                loading: false,
                items: [
                    ...state.items,
                    ...action.response
                ]
            };
        default: return state;
    }
};

export default tweetsReducers

