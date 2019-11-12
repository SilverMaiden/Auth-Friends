import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
} from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("token") ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);
function App() {
  return (
    <Router>
        <div className="App">
        <br />
        <Switch>
            <Route path="/login" component={Login} />
            <PrivateRoute path='/friendslist' component={FriendsList} />
        </Switch>
         </div>
    </Router>
  );
}

export default App;
