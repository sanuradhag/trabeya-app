import React, { Component } from "react";
import "./side-pane.scss";
import avatar from "../../assets/avatar.png";
import SidePaneItem from "./side-pane-item/SidePaneItem";
import {
  faHouseUser,
  faUser,
  faDesktop,
  faFileInvoice,
  faThLarge,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SidePane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: [
        {
          id: 1,
          title: "Home",
          icon: faHouseUser,
          selected: false
        },
        {
          id: 2,
          title: "Apps",
          icon: faThLarge,
          selected: false
        },
        {
          id: 3,
          title: "Profile",
          icon: faUser,
          selected: false
        },
        {
          id: 4,
          title: "Reports",
          icon: faFileInvoice,
          selected: false
        },
        {
          id: 5,
          title: "Inside the App",
          icon: faDesktop,
          selected: false
        },
        {
          id: 6,
          title: "Natural Language Query",
          icon: faDesktop,
          selected: false
        }
      ],
      expand: false
    };
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClick(e) {
    this.setState({ expand: true });
    this.props.onSideBarExpanded(true);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({
        expand: false
      });
      this.props.onSideBarExpanded(false);
    }
  }

  renderItems() {
    const { navItems } = this.state;
    return navItems.map(navItem => (
      <SidePaneItem
        key={navItem.id}
        title={navItem.title}
        icon={navItem.icon}
        selected={navItem.selected}
      />
    ));
  }

  renderProfile() {
    return (
      <div className={"profile-container"}>
        <img alt="avatar-alt" className={"avatar"} src={avatar} />
        <span className={"name"}>Allie Sherman</span>
        <span className={"title"}>UI/UX Engineer</span>
      </div>
    );
  }

  renderEmailCount() {
    return (
      <div className="email-count-wrapper">
        <div className="count">10</div>
        <div className="email-envelop">
          <FontAwesomeIcon
            icon={faEnvelope}
            color={"#51A94B"}
            className={"icon"}
            size={"lg"}
          />
        </div>
      </div>
    );
  }

  render() {
    const { expand } = this.state;
    const mainClass = `${expand ? "" : "mini"} side-pane`;

    return (
      <div
        className={mainClass}
        ref={this.setWrapperRef}
        onClick={e => {
          this.handleClick(e);
        }}
      >
        {this.renderProfile()}
        <ul className="item-list nav">{this.renderItems()}</ul>
        {this.renderEmailCount()}
      </div>
    );
  }
}

export default SidePane;
