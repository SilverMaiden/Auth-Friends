import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import PlannerPortfolio from './components/PlannerPortfolio';
import './styles.css';
import SingleFriend from "./components/singleFriend";
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


function App(props) {
  return (
    <Router>
        <div className="App">
        <br />
        <Switch>
            <Route path="/login" component={Login} />
            <PrivateRoute exact path='/friendslist' component={FriendsList} />
            <PrivateRoute exact path={`/friendsList/:id`} component={SingleFriend} />
        </Switch>
         </div>
    </Router>
  );
}

export default App;
