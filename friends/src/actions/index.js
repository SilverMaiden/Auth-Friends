import axios from 'axios';
import {axiosWithAuth} from '../axiosAuth';

export const FETCH_FRIENDS_START = 'FETCH_FRIENDS_START';
export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS';
export const FETCH_FRIENDS_FAIL = 'FETCH_FRIENDS_FAIL';

export const ADD_FRIEND_START = 'ADD_FRIEND_START';
export const ADD_FRIEND_SUCCESS = 'ADD_FRIEND_SUCCESS';
export const ADD_FRIEND_FAIL = 'ADD_FRIEND_FAIL';


export const getFriends = () => dispatch => {
    dispatch({type: FETCH_FRIENDS_START});
    axiosWithAuth()
        .get("http://localhost:5000/api/friends")
        .then(response => {
            dispatch({type: FETCH_FRIENDS_SUCCESS, payload:response.data})
        })
        .catch(err => dispatch({type: FETCH_FRIENDS_FAIL, payload: err}))
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
