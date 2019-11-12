import React from 'react';

import {Link} from "react-router-dom";
const Logout = (props) => {

    const logout = event => {
        event.preventDefault();
         console.log(localStorage);
        localStorage.clear()
         console.log(localStorage);
    }

    return (

        <button onClick={logout}><Link to='/login'> Logout </Link></button>
    )
}
export default Logout;
