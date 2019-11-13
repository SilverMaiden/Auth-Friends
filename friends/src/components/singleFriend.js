import React from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router-dom'

const mapStateToProps = state => ({
    friend: state.singleFriend
})

const SingleFriend = (props) => {

    console.log(props.friend);
    return (
        <>
        <h1> Hi </h1>
            <p> {props.friend.name}</p>
            <p> {props.friend.age}</p>
            <p> {props.friend.email}</p>
            <Link to='/friendsList'><button> Return to friends list </button></Link>
        </>
    )
}

export default connect(mapStateToProps, {})(SingleFriend);
