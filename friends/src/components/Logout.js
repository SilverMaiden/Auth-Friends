import React from 'react';

const Logout = (props) => {

    const logout = event => {
        event.preventDefault();
         console.log(localStorage);
        localStorage.clear()
         console.log(localStorage);
    }

    return (

        <button onClick={logout}> Logout </button>
    )
}
export default Logout;
