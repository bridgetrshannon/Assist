import React, { Component } from "react";
import { MDBInput, MDBBtn, MDBRow } from "mdbreact";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";
import classnames from "classnames";
import { withRouter } from "react-router-dom";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/welcome");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/welcome");
      // push user to dashboard when they login
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }
  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(userData);
  };
  render() {
    const { errors } = this.state;
    return (
      <form noValidate onSubmit={this.onSubmit}>
        <div className="mx-auto mt-5"></div>
        <p className="h4 text-center mb-4">Log in!</p>
        <MDBInput
          onChange={this.onChange}
          value={this.state.email}
          error={errors.name}
          label="email"
          id="email"
          type="email"
          success="right"
          htmlFor="defaultFormRegisterEmailEx"
          className={classnames("grey-text", "", {
            invalid: errors.email || errors.emailnotfound,
          })}
        />
        <span className="red-text">
          {errors.email}
          {errors.emailnotfound}
        </span>

        <MDBInput
          onChange={this.onChange}
          value={this.state.password}
          error={errors.password}
          id="password"
          type="password"
          label="password"
          success="right"
          htmlFor="defaultFormRegisterPasswordEx"
          className={classnames("grey-text", "", {
            invalid: errors.password || errors.passwordincorrect,
          })}
        />
        <span className="red-text">
          {errors.password}
          {errors.passwordincorrect}
        </span>
        <br />
        <div className="text-center mb-4">
          <MDBBtn color="deep-purple" outline type="submit">
            Log in
          </MDBBtn>
        </div>
        <MDBRow>
          <br />
          <br />
          <br />
          <br />
        </MDBRow>
      </form>
    );
  }
}

LoginForm.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { loginUser })(withRouter(LoginForm));
