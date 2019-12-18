import React, {useState, useEffect} from "react";
import {connect} from 'react-redux';


const mapStateToProps = state => ({
    singleFriend: state.singleFriend

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
    if (props.friend) {
        setFriend({
            name: props.friend.name,
            age: props.friend.age,
            email: props.friend.email,
            id: id,
        })

    }


    }, [])

    const handleChange = event => {
        event.preventDefault();
        setFriend({...friend, [event.target.name]: event.target.value})
        console.log(friend);
    }

    const handleClick = event => {
        props.friendAction(friend);
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

            {console.log(props.singleFriend)}
            <button onClick={handleClick}>
                {props.buttonLabel} Friend
            </button>
        </form>


        </div>



    )
}

export default connect(mapStateToProps, {})(FriendForm);
