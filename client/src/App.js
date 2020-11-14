import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import About from "./components/ImageCard";
import Create from "./pages/Create";
import Search from "./pages/Search";
import Home from "./pages/Home";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Navbar /> */}
        {/* <Signup /> */}
        <Login />
        {/* <About /> */}
        <Create />
        {/* <Home /> */}
        <Search />
      </div>
    );
  }
}

export default App;
