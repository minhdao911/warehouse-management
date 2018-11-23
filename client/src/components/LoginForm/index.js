import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import "./index.css";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      action: "Login",
      redirect: false
    };
  }
  handle = (event, field) => {
    this.setState({
      [field]: event.target.value
    });
  };

  toggleSubmitState = () => {
    this.setState({
      action: this.state.action === "Login" ? "Register" : "Login"
    });
  };

  emptyFields = () => {
    this.setState({
      username: "",
      password: ""
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { action, redirect, ...data } = this.state;
    const submitURL = `/${action}`;

    fetch(submitURL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res.status === 200) {
          return res.json();
        } else {
          return res.text();
        }
      })
      .then(res => {
        if (action === "Login") {
          //handle login
          if (res.username) {
            this.props.handleLogIn(res.username);
            this.setState({ redirect: true });
          } else {
            alert("Wrong username or password!");
            this.emptyFields();
          }
        } else {
          //handle register
          if (res.username) {
            alert("Register success!");
          } else {
            alert(res.message);
            this.emptyFields();
          }
        }
      });
  };

  render() {
    const { action, username, password, redirect } = this.state;

    return (
      <div className="wrap">
        {redirect && <Redirect to="/home" />}
        <div className="container">
          <form className="form-group" onSubmit={this.handleSubmit}>
            <div className="form-group">
            <input 
                type="text" 
                className="form-control"
                placeholder="Enter your username"
                value={username}
                onChange={e => this.handle(e, "username")}
              />
              <br />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="password"
                value={password}
                placeholder="Enter your password"
                onChange={e => this.handle(e, "password")}
              />
              <br />
            </div>
            <button className="btn btn-block" type="submit">
              {action}
            </button>
          </form>

          <div className="forgotPassword" onClick={this.toggleSubmitState}>
            {action === "Login"
              ? "Register a new account"
              : "Already have an account?"}
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
