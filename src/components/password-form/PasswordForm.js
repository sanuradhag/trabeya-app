import React, { Component } from "react";
import "./password-form.scss";
import fromLogo from "../../assets/form-logo.jpg";
import { Form, Button } from "react-bootstrap";

import passwordIcon from "../../assets/password-icn.png";

import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class PasswordForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oldPassword: null,
      newPassword: null,
      confirmPassword: null,
      invalid: false
    };
  }

  validatePasswords() {
    const { oldPassword, newPassword, confirmPassword } = this.state;
    if (oldPassword && newPassword && confirmPassword) {
      this.setState({ invalid: newPassword !== confirmPassword });
    }
  }

  onOldPasswordChange(value) {
    this.setState({ oldPassword: value });
  }

  onNewPasswordChange(value) {
    this.setState({ newPassword: value }, () => {
      this.validatePasswords();
    });
  }

  onConfirmPasswordChange(value) {
    this.setState({ confirmPassword: value }, () => {
      this.validatePasswords();
    });
  }

  render() {
    const { invalid } = this.state;
    return (
      <div className="password-form container">
        <img alt="password-icn" src={fromLogo} className="form-logo" />
        <span className="green-text">Inside The App</span>
        <span className="form-text">
          Enter the new password then your password will change! Dont forget it
          again
        </span>
        <Form>
          <Form.Group controlId="oldPassword">
            <img
              alt="password-icn"
              src={passwordIcon}
              className={"password-icn"}
            />
            <Form.Control
              type="password"
              placeholder="Old Password"
              onChange={e => this.onOldPasswordChange(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="newPassword">
            <img
              alt="password-icn"
              src={passwordIcon}
              className={"password-icn"}
            />
            <Form.Control
              type="password"
              placeholder="New Password"
              onChange={e => this.onNewPasswordChange(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="confirmPassword">
            <img
              alt="password-icn"
              src={passwordIcon}
              className={"password-icn"}
            />
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              onChange={e => this.onConfirmPasswordChange(e.target.value)}
            />
          </Form.Group>

          {invalid && (
            <div className="form-error">
              <FontAwesomeIcon icon={faExclamationTriangle} color={"red"} />
              <span>Passwords do not match.</span>
            </div>
          )}

          {!invalid && (
            <div className="form-error">
              <span>&nbsp;</span>
            </div>
          )}

          <div className="form-footer">
            <Button variant="dark" type="submit">
              Set Password
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

export default PasswordForm;
