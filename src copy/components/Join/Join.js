import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppLogo from "../../resources/AppLogo.png";
import "./Join.css";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div class="cont">
      <div class="sign-in">
        <h2>Chattify</h2>
        <img src={AppLogo} alt="Chattify" />
        <div className="block">
          <div className="box">
            <input
              placeholder="Username"
              className="textInput"
              type="text"
              onChange={(event) => setName(event.target.value)}
            />
            <input
              placeholder="Room"
              className="textInput"
              type="text"
              onChange={(event) => setRoom(event.target.value)}
            />
            <Link
              onClick={(event) =>
                !name || !room ? event.preventDefault() : null
              }
              to={`/chat?name=${name}&room=${room}`}
            >
              <input className="signinButton" type="submit" value="Join" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
