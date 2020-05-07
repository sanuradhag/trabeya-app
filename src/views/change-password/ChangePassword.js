import React, { Component } from "react";
import SidePane from "../../components/side-pane/SidePane";
import PasswordForm from "../../components/password-form/PasswordForm";

import "./change-password.scss";

class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  handleExpand(expanded) {
    this.setState({
      expanded
    });
  }

  render() {
    const { expanded } = this.state;
    return (
      <div className="change-password">
        <SidePane onSideBarExpanded={expanded => this.handleExpand(expanded)} />
        <div
          style={{
            width: expanded ? "calc(100% - 235px)" : "100%",
            marginLeft: expanded ? "235px" : "0px",
            transition: "0.4s"
          }}
        >
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item green">
                <a href="/">Inside The App</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Dashboard
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Inside The App
              </li>
            </ol>
          </nav>
          <PasswordForm />
        </div>
      </div>
    );
  }
}

export default ChangePassword;
