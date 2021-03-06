import React from "react";

import "./side-pane-item.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SidePaneItem = ({ title, icon, selected, mini }) => {
  const selectedClass = selected ? "nav-link selected" : "nav-link";
  return (
    <li className={selectedClass} style={{width: mini ? '65%': ''}}>
      <FontAwesomeIcon
        icon={icon}
        color={!selected ? "white" : "#51A94B"}
        className={"icon"}
        size={"lg"}
      />
      <span className={"title"}>{title}</span>
    </li>
  );
};

export default SidePaneItem;
