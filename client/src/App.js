import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import About from "./components/About";
import Create from "./components/Create";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Wrapper>
            <Route exact path="/" component={Login} />
            <Route exact path="/" component={Signup} />
            <Route exact path="/portfolio" component={About} />
            <Route exact path="/contact" component={Create} />
          </Wrapper>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
