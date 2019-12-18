import React from "react";
import {Link} from "react-router-dom";
import { deleteFriend} from '../actions/index';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
    singleFriend: state.singleFriend
})

const mapDispatchToProps = dispatch => ({
    deleteFriend: (id) => {
        deleteFriend(id)(dispatch)
    },
})

const Friend = (props) => {
    console.log(props.friend)

    const handleClick = event => {
        props.deleteFriend(props.friend.id)
    }
    return (
        <div className="friend-container">
            <br />
                    <span className="friend">
                        <p> Name: {props.friend.name}</p>
                        <p> Age: {props.friend.age}</p>
                        <p> Email: {props.friend.email}</p>
                        {!props.single ?  <Link to={`/friendsList/${props.friend.id}`}><button onClick={() => {
                                localStorage.setItem('singleFriendId', props.friend )
                                }}> Learn More</button></Link> : <Link to="/friendsList"><button onClick={handleClick}>Delete </button></Link>}
                    </span>

            <br />
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Friend);
