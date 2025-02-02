import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router-dom'
import {editFriendById, getFriendById} from '../actions/index';
import FriendForm from '../components/FriendForm';
import Friend from './Friend';
import axiosWithAuth from '../axiosAuth';

const mapStateToProps = state => ({
    friend: state.singleFriend,
    isEditing: state.isEditing,
    isGettingFriend: state.isGettingFriend,
})

const mapDispatchToProps = dispatch => ({
        getFriendById: (id) => {
            getFriendById(id)(dispatch)
    },
    editFriendById: (id) => {
        editFriendById(id)(dispatch)
    }
})

const SingleFriend = (props) => {

    const url = window.location.pathname;
    const id = url.substring(url.lastIndexOf('/') + 1);

    useEffect(() => {
        props.getFriendById(id);
    }, []);

    return (
        <>
        {!props.isGettingFriend || !props.isGettingFriend ?
        <>
            <Friend friend={props.friend} single={true}/>
            <FriendForm friendAction={props.editFriendById} friend={props.friend} buttonLabel={'Update'} />
        </>
            : <p>Loading Friend...</p>}
            <Link to='/friendsList'><button> Return to friends list </button></Link>
            </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleFriend);
