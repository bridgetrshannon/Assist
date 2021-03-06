import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import LogoutBtn from "./LogoutBtn";

class Navbar extends Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <Router>
        <MDBNavbar color="purple-gradient" dark expand="md">
          <MDBNavbarBrand>
            <a href="/">
              <h3 className="white-text">Assist</h3>
            </a>
          </MDBNavbarBrand>
          <MDBIcon icon="hand-holding-heart fa-lg white-text mb-2" />
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/search">
                  Search
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/create">
                  Create
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About Us
                </a>
              </li>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <MDBIcon icon="user" />
                  </MDBDropdownToggle>
                  <MDBDropdownMenu right basic>
                    <MDBDropdownItem href="/profile">
                      My Profile
                    </MDBDropdownItem>
                    <LogoutBtn />
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
            </ul>
          </MDBCollapse>
        </MDBNavbar>
      </Router>
    );
  }
}

export default Navbar;
