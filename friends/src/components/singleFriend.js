import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router-dom'
import {editFriendById, getFriendById} from '../actions/index';
import FriendForm from '../components/FriendForm';
import axiosWithAuth from '../axiosAuth';

const mapStateToProps = state => ({
    friend: state.singleFriend
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
        console.log(props.friend)
    }, []);

    return (
        <>
        <h1> Hi </h1>
            <p> {props.friend.name}</p>
            <p> {props.friend.age}</p>
            <p> {props.friend.email}</p>
            <FriendForm friendAction={props.editFriendById} friend={props.friend} buttonLabel={'Update'} />
            <Link to='/friendsList'><button> Return to friends list </button></Link>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleFriend);
