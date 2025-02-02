import React, { useEffect} from 'react';
import Logout from './Logout';
import Friend from './Friend';
import FriendForm from './FriendForm';
import {axiosWithAuth} from '../axiosAuth';
import {getFriends, addFriend} from '../actions/index';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
    friends: state.friends,
    isFetching: state.isFetching,
    isAdding: state.isAdding,
    isDeleting: state.isDeleting,
    isEditing: state.isEditing,
})

const mapDispatchToProps = {
    getFriends: getFriends,
    addFriend: addFriend,
}

const FriendsList = (props) => {
    return (
        <>
            <h1> Hello I'm the friends list </h1>
            {props.friends.map(friend => (
                <Friend friend={friend}  />
            ))}
            <FriendForm friendAction={props.addFriend} buttonLabel={'Add'}/>
            <Logout />
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendsList);
