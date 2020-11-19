
import React, { Component } from "react";
import { MDBInput, MDBBtn, MDBRow } from "mdbreact";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../actions/authActions";
import classnames from "classnames";
import { Link, withRouter } from "react-router-dom";

class SignupForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to welcome
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/welcome");
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log(newUser);
    this.props.registerUser(newUser, this.props.history);
  };
  render() {
    const { errors } = this.state;
    return (
      <form noValidate onSubmit={this.onSubmit}>
        <div className="mx-auto mt-5">
          <p className="h4 text-center mb-4">Sign up!</p>
          <MDBInput
            onChange={this.onChange}
            value={this.state.email}
            error={errors.name}
            name="email"
            label="email"
            id="email"
            type="email"
            success="right"
            htmlFor="defaultFormRegisterEmailEx"
            className={classnames("grey-text", "", {
              invalid: errors.name,
            })}
          />

          <MDBInput
            onChange={this.onChange}
            value={this.state.password}
            error={errors.password}
            name="password"
            id="password"
            type="password"
            label="password"
            success="right"
            htmlFor="defaultFormRegisterPasswordEx"
            className={classnames("grey-text", "", {
              invalid: errors.password,
            })}
          />
        </div>
        <br />
        <div className="text-center mb-4">
          <MDBBtn color="deep-purple" outline type="submit">
            Sign up
          </MDBBtn>
        </div>
        <div className="text-center mb-4">
          <Link to="/login">
            <MDBBtn color="deep-purple" outline type="submit">
              Log in
            </MDBBtn>
          </Link>
        </div>
      </form>
    );
  }
}

SignupForm.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(SignupForm));
