import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import About from "./components/ImageCard";
import Create from "./components/Create";
import Search from "./components/SearchForm";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Signup />
        {/* <Login /> */}
        {/* <About /> */}
        {/* <Create /> */}
        {/* <Search /> */}
      </div>
    );
  }
}

export default App;
