import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import About from "./components/ImageCard";
import Create from "./pages/Create";
import Search from "./pages/Search";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import "./App.css";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Home />
        {/* <Signup />
        <Login />
        <About />
        <Create />
        <Search /> */}
        {/* <Profile /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
