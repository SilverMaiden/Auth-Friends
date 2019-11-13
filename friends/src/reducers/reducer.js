import {
    FETCH_FRIENDS_START,
    FETCH_FRIENDS_SUCCESS,
    FETCH_FRIENDS_FAIL
} from '../actions/index';
const initialState = {
    friends: [],
    error: '',
    isFetching: false
}

export const reducer = (state=initialState, action) => {
    switch(action.type) {
        case FETCH_FRIENDS_START:
            console.log("Fetching friends has started.");
            return {
                ...state,
                isFetching: true
            }
        case FETCH_FRIENDS_SUCCESS:
            return {
                ...state,
                friends: action.payload
        }
        case FETCH_FRIENDS_FAIL:
            return {
            ...state,
            error: action.payload
        }
        default:
            return state
    }
}
