import React from "react";
import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import "./InfoBar.css";

const InfoBar = ({ room }) => (
  <div className="header">
    <div className="headerInfo">
      <h3>{room}</h3>
    </div>

    <IconButton>
      <SearchOutlined />
    </IconButton>
    <IconButton>
      <AttachFile />
    </IconButton>
    <IconButton>
      <MoreVert />
    </IconButton>
  </div>
);

export default InfoBar;
