import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
// import About from "./components/ImageCard";
import Create from "./pages/Create";
import Search from "./pages/Search";
import Home from "./pages/Home";
import Welcome from "./pages/Welcome";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper/Wrapper";
import "./App.css";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login

    window.location.href = "/home";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Wrapper>
              <Navbar />
              <Route exact path="/" component={Home} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/create" component={Create} />
              <Route exact path="/search" component={Search} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/welcome" component={Welcome} />
              <Switch>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
              </Switch>
            </Wrapper>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
