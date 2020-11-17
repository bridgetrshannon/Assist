import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
  MDBNavLink,
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";

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
            <h3 className="white-text">Assist</h3>
          </MDBNavbarBrand>
          <MDBIcon icon="hand-holding-heart fa-lg white-text mb-2" />
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav right>
              <MDBNavItem active>
                <a href="/">Home</a>
              </MDBNavItem>
              <MDBNavItem>
                <a href="/create">Create</a>
              </MDBNavItem>
              <MDBNavItem>
                <a href="/about">About Us</a>
              </MDBNavItem>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <MDBIcon icon="user" />
                  </MDBDropdownToggle>
                  <MDBDropdownMenu right basic>
                    <MDBDropdownItem href="/profile">
                      My Profile
                    </MDBDropdownItem>
                    <MDBDropdownItem href="/saved">
                      Saved Opportunities
                    </MDBDropdownItem>
                    <MDBDropdownItem href="#!">
                      Logout
                      <MDBIcon
                        icon="sign-out-alt"
                        className="ml-2 align-middle"
                      />
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </Router>
    );
  }
}

export default Navbar;
