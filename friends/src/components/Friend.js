import React from "react";


const Friend = (props) => {
    return (
                <span>
                    <p> Name: {props.friend.name}</p
                    ><p> Age: {props.friend.age}</p>
                    <p> Email: {props.friend.email}</p>
                </span>
    )
}

export default Friend;
