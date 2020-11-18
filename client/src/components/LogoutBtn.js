import React from "react";
import { MDBDropdownItem, MDBIcon } from "mdbreact";
import Dashboard from "../components/dashboard/Dashboard";
// import { logoutUser } from "../../actions/authActions";

const LogoutBtn = () => {
  return (
    <div>
      <Dashboard />
      {/* <MDBDropdownItem href="/signup">
        Logout
        <MDBIcon icon="sign-out-alt" className="ml-2 align-middle" />
      </MDBDropdownItem> */}
    </div>
  );
};

export default LogoutBtn;

// import React, { Component } from "react";
// import { MDBInput, MDBBtn, MDBDropdownItem, MDBIcon } from "mdbreact";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { loginUser } from "../actions/authActions";
// import classnames from "classnames";
// import { withRouter } from "react-router-dom";

// class LoginForm extends Component {
//   componentDidMount() {
//     // If not logged in and user navigates to Login page, should redirect them to dashboard
//     if ((this.props.auth.isAuthenticated = false)) {
//       this.props.history.push("/");
//     }
//   }

//   componentWillReceiveProps(nextProps) {
//     if ((nextProps.auth.isAuthenticated = false)) {
//       this.props.history.push("/");
//       // push user to dashboard when they login
//     }
//   }
//   onChange = (e) => {
//     this.setState({ [e.target.id]: e.target.value });
//   };
//   onSubmit = (e) => {
//     e.preventDefault();
//     const userData = {
//       email: this.state.email,
//       password: this.state.password,
//     };
//     this.props.loginUser(userData);
//   };
//   render() {
//     return (
//       <div>
//         {/* onLogoutClick */}
//         <MDBDropdownItem>
//           Logout
//           <MDBIcon icon="sign-out-alt" className="ml-2 align-middle" />
//         </MDBDropdownItem>
//       </div>
//     );
//   }
// }

// LoginForm.propTypes = {
//   loginUser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
//   errors: PropTypes.object.isRequired,
// };
// const mapStateToProps = (state) => ({
//   auth: state.auth,
//   errors: state.errors,
// });
// export default connect(mapStateToProps, { loginUser })(withRouter(LoginForm));
