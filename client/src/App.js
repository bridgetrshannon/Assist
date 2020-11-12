import React, { Component } from "react";
import Navbar from "./components/Navbar";
// import Signup from "./components/Signup";
import Login from "./components/Login";
// import About from "./components/About";
import "./App.css";
import About from "./components/About";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        {/* <Signup /> */}
        {/* <Login /> */}
        <About />
      </div>
    );
  }
}

export default App;
