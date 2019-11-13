import {
    FETCH_FRIENDS_START,
    FETCH_FRIENDS_SUCCESS,
    FETCH_FRIENDS_FAIL,
    ADD_FRIEND_START,
    ADD_FRIEND_SUCCESS,
    ADD_FRIEND_FAIL,
} from '../actions/index';

const initialState = {
    friends: [],
    error: '',
    isFetching: false,
    isAdding: false
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
        case ADD_FRIEND_START:
            console.log("adding friends is starting!")
            return {
                ...state,
                isAdding: true
        }
        case ADD_FRIEND_SUCCESS:
            console.log("adding friends was successful!")
            return {
                ...state,
                isAdding: false
        }

        case ADD_FRIEND_FAIL:
            console.log("uh oh, I failed :(");
            return {
                ...state,
                error: action.payload
        }

        default:
            return state
    }
}
