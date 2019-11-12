import React, {useState, useEffect} from 'react';
import Logout from './Logout';
import {axiosWithAuth} from '../axiosAuth';

import {Link} from "react-router-dom";
const FriendsList = () => {
    const [friendsList, setFriendsList] = useState([]);

    useEffect(() => {
    axiosWithAuth().get("http://localhost:5000/api/friends")
    .then(response => {
        setFriendsList(response.data)
    })


    }, [])

    return (
        <>
            <h1> Hello I'm the friends list </h1>
            {friendsList.map(friend => (
                <h6> {friend.name} </h6>
            ))}
           <Link to="/login"> <Logout /></Link>
        </>
    )
}

export default FriendsList;
