import React from "react";
import {Link} from "react-router-dom";
import {getFriendById} from '../actions/index';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
    singleFriend: state.singleFriend
})

const mapDispatchToProps = {
    getFriendById: getFriendById
}

const Friend = (props) => {
    console.log(props.friend)

    return (
        <div className="friend-container">
            <br />
                    <span className="friend">
                        <p> Name: {props.friend.name}</p>
                        <p> Age: {props.friend.age}</p>
                        <p> Email: {props.friend.email}</p>
                        {!props.single ?  <Link to={`/friendsList/${props.friend.id}`}><button onClick={() => {
                                localStorage.setItem('singleFriendId', props.friend )
                                }}> Learn More</button></Link> : <> </>}
                    </span>

            <br />
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Friend);
