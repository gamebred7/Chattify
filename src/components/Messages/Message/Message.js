import React from "react";

import "./Message.css";

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  const setMessageType = () => {
    switch (user) {
      case "admin":
        return (
          <div className="messageContainer justifyCenter admin-message">
            {text}
          </div>
        );

      default:
        return (
          <div className="messageContainer justifyStart">
            <div>
              <div className="sentText pl-10">{user}</div>
              <div className="messageBox backgroundLight">
                <p className="messageText colorDark">{text}</p>
              </div>
            </div>
          </div>
        );
    }
  };

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className="messageContainer justifyEnd">
      <div className="messageBox backgroundBlue">
        <p className="messageText colorWhite">{text}</p>
      </div>
    </div>
  ) : (
    setMessageType()
  );
};

export default Message;
