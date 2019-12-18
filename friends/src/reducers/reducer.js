import {
    FETCH_FRIENDS_START,
    FETCH_FRIENDS_SUCCESS,
    FETCH_FRIENDS_FAIL,

    FRIEND_BY_ID_START,
    FRIEND_BY_ID_SUCCESS,
    FRIEND_BY_ID_FAIL,

    EDIT_FRIEND_START,
    EDIT_FRIEND_SUCCESS,
    EDIT_FRIEND_FAIL,

    ADD_FRIEND_START,
    ADD_FRIEND_SUCCESS,
    ADD_FRIEND_FAIL,
} from '../actions/index';

const initialState = {
    friends: [],
    singleFriend: [],
    error: '',
    isFetching: false,
    isAdding: false,
    isGettingFriend: false,
    isEditing: false
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
            console.log("Fetching friends is successful");
            return {
                ...state,
                friends: action.payload,
                isFetching: false
        }
        case FETCH_FRIENDS_FAIL:
            return {
                ...state,
                error: action.payload
        }

        //Get friend by ID:
        case FRIEND_BY_ID_START:
            console.log("Getting friend by ID is starting!");
            return {
                ...state,
                isGettingFriend: true
            }
        case FRIEND_BY_ID_SUCCESS:
            console.log("Getting friend by is is successful!")
            console.log(action.payload);
            return {
                ...state,
                singleFriend: action.payload,
                isGettingFriend: false
            }
        case FRIEND_BY_ID_FAIL:
            console.log("getting friend failed :(")
            return {
            ...state,
            error: action.payload
            }

        case EDIT_FRIEND_START:
            console.log('EDIT HAS STARTED!')
            return {
                ...state,
                isEditing: true
        }

        case EDIT_FRIEND_SUCCESS:
            console.log("YAY, EDIT SUCCESSFUL!")
            return {
                ...state,
                singleFriend: action.payload
        }
        case EDIT_FRIEND_FAIL:
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
