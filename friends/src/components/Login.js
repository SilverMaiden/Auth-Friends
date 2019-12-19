import React, {useState} from 'react';
import {axiosWithAuth} from '../axiosAuth';

const Login = (props) => {
 const [credentials, setCredentials] = useState({});

 const login = event => {
     event.preventDefault();
     axiosWithAuth().post("http://localhost:5000/api/login", credentials)
     .then(response => {
         localStorage.setItem('token', response.data.payload);
         props.history.push('/friendslist');
         console.log(response.data);
     })

 }

 const handleChange = event => {
    setCredentials({
        ...credentials,
        [event.target.name]: event.target.value,
    })
 }


    return (
      <div>
        <form onSubmit={login} >
          <input
            label= "username"
            placeholder="username"
            type="text"
            name="username"
            onChange={handleChange}
          />
          <input
            label= "password"
            placeholder="password"
            type="password"
            name="password"
            onChange={handleChange}
          />
          <button>Log in</button>
        </form>
      </div>
    )
}

export default Login;
