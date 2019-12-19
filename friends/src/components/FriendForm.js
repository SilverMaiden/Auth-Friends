import React, {useState, useEffect} from "react";
import {connect} from 'react-redux';


const mapStateToProps = state => ({
    singleFriend: state.singleFriend,
    friends: state.friends

});

const FriendForm = (props) => {
    const url = window.location.pathname;
    const id = url.substring(url.lastIndexOf('/') + 1);

    const [friend, setFriend] = useState({
        name: "",
        age: "",
        email: "",
        id: 0,
    })


    useEffect(() => {
        if (props.friends.length > 1) {
            console.log(props.friends.length)
            let newId = props.friends.length + 1;
            setFriend({
                id: newId
            })
        }

        if (props.friend) {
            console.log(props.friend.id)
            setFriend({
                name: props.friend.name,
                age: props.friend.age,
                email: props.friend.email,
                id: id,
            })
        }
    }, [props.friends])


    const handleChange = event => {
        event.preventDefault();
        setFriend({...friend, [event.target.name]: event.target.value})
    }

    const handleClick = event => {
        props.friendAction(friend);
        setFriend({
            name: "",
            age: "",
            email: "",
            id: props.friends.length + 1,
        })
    }


    return (
        <div className="friend-container">
        <form className="friend">
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
            <br />

            <button onClick={handleClick}>
                {props.buttonLabel} Friend
            </button>
        </form>


        </div>



    )
}

export default connect(mapStateToProps, {})(FriendForm);
