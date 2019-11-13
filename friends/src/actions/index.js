import axios from 'axios';
import {axiosWithAuth} from '../axiosAuth';

export const FETCH_FRIENDS_START = 'FETCH_FRIENDS_START';
export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS';
export const FETCH_FRIENDS_FAIL = 'FETCH_FRIENDS_FAIL';

export const ADD_FRIEND_START = 'ADD_FRIEND_START';
export const ADD_FRIEND_SUCCESS = 'ADD_FRIEND_SUCCESS';
export const ADD_FRIEND_FAIL = 'ADD_FRIEND_FAIL';

export const FRIEND_BY_ID_START = 'FRIEND_BY_ID_START';
export const FRIEND_BY_ID_SUCCESS = 'FRIEND_BY_ID_SUCCESS';
export const FRIEND_BY_ID_FAIL = 'FRIEND_BY_ID_FAIl';

//later
export const EDIT_FRIEND_START = 'EDIT_FRIEND_START';


export const getFriends = () => dispatch => {
    dispatch({type: FETCH_FRIENDS_START});
    axiosWithAuth()
        .get("http://localhost:5000/api/friends")
        .then(response => {
            dispatch({type: FETCH_FRIENDS_SUCCESS, payload:response.data})
        })
        .catch(err => dispatch({type: FETCH_FRIENDS_FAIL, payload: err}))
}

// Next action caller will get a friend by their id.


export const getFriendById = (id) => dispatch => {
    dispatch({type: FRIEND_BY_ID_START});
    console.log("WOOT");
    axiosWithAuth()
        .get(`http://localhost:5000/api/friends/${id}`)
        .then(response => {
            dispatch({type: FRIEND_BY_ID_SUCCESS, payload:response.data})
        })
        .catch(err => dispatch({type: FRIEND_BY_ID_FAIL, payload: err}))
}


export const addFriend = (name, age, email) => dispatch => {
    dispatch({type: ADD_FRIEND_START});
    axiosWithAuth()
        .post('http://localhost:5000/api/friends/', {
            name,
            age,
            email,
            id: 0
        }).then(response => {
               dispatch({type: ADD_FRIEND_SUCCESS, payload: response})
        }).catch(err => {
            dispatch({type:ADD_FRIEND_FAIL, payload: err})
        })
}
