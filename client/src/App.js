import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import About from "./components/About";
import Create from "./components/Create";
import Search from "./components/Search";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        {/* <Signup /> */}
        {/* <Login /> */}
        {/* <About /> */}
        {/* <Create /> */}
        <Search />
      </div>
    );
  }
}

export default App;
