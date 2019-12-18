import React, { useEffect} from 'react';
import FriendsList from './FriendsList';
import {connect} from 'react-redux';
import {getFriends} from '../actions/index';

const mapStateToProps = state => ({
    friends: state.friends,
    isFetching: state.isFetching,
    isAdding: state.isAdding,
})



const mapDispatchToProps = {
    getFriends: getFriends,
}


const Landing = (props) => {
    useEffect(() => {
        props.getFriends();
    }, [])

    return (
        <>
        {props.isFetching ?
         <p> Loading...</p>
          :  <FriendsList />}
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
