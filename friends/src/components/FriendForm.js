import React, {useState} from "react";
import {addFriend} from '../actions/index';
import {connect} from 'react-redux';

const FriendForm = (props) => {
    const [friend, setFriend] = useState({
        name:'',
        age: '',
        email: '',
    })

    const handleChange = event => {
        event.preventDefault();
        setFriend({...friend, [event.target.name]: event.target.value})
    }



    return (
        <div>
        <form >
            <input
                type="text"
                name="name"
                placeholder="name"
                onChange={handleChange}
            />
            <input
                type="text"
                name="age"
                placeholder="age"
                onChange={handleChange}
            />
            <input
                type="text"
                name="email"
                placeholder="email"
                onChange={handleChange}
            />

            <button onClick={() => {
                props.addFriend(friend.name, friend.age, friend.email)
            }}>Add Friend</button>
        </form>


        </div>



    )
}

export default connect(null, {addFriend})(FriendForm);
