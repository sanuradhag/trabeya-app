import React from "react";
import { FormControl } from "react-bootstrap";

import "./header.scss";
import {
  faSearch,
  faEnvelope,
  faBell
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import avatar from "../../assets/avatar.png";

const Header = () => {
  return (
    <div className="nav nav-header">
      <img
        alt="logo-icn"
        className={"logo"}
        src={
          "https://trabeya.com/wp-content/uploads/2018/06/Trabeya-01-02-01.png"
        }
      />

      <div className="search">
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <FontAwesomeIcon
          icon={faSearch}
          className={"icon"}
          color={"white"}
          size={"lg"}
        />
        <FormControl
          type="text"
          value="2:36 PM Today March 2020"
          className="mr-sm-n5"
        />
      </div>
      <div className="profile-content">
        <FontAwesomeIcon
          icon={faEnvelope}
          className={"icon"}
          color={"#51A94B"}
          size={"lg"}
        />
        <FontAwesomeIcon
          icon={faBell}
          className={"icon"}
          color={"#51A94B"}
          size={"lg"}
        />
        <span className="name">Allie Sherman</span>
        <img alt="avatar" className="avatar" src={avatar} />
      </div>
    </div>
  );
};

export default Header;
