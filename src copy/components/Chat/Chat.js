import React, { useState } from "react";
import { IconButton } from "@material-ui/core";
import ScrollToBottom from "react-scroll-to-bottom";
import InsertEmotionIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import TelegramIcon from "@material-ui/icons/Telegram";
import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons";
import "./Chat.css";

function Chat() {
  const [Input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    // await axios.post("/messages/new", {
    //   message: Input,
    //   name: "Vage Igityan",
    //   timestamp: "Just Now",
    //   received: false,
    // });

    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat-header">
        <div className="chat-headerInfo">
          <h3>Room name</h3>
        </div>

        <div className="chat-headerRight">
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
      </div>

      <ScrollToBottom className="chat-body">
        {/* {messages.map((message) => (
          <p className={`chat-message ${message.received && "chat-receiver"}`}>
            <span className="chat-name">{message.name}</span>
            {message.message}
            <span className="timestamp">{message.timestamp}</span>
          </p>
        ))} */}
      </ScrollToBottom>

      <div className="chat-footer">
        <InsertEmotionIcon />
        <form>
          <input
            value={Input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(event) =>
              event.key === "Enter" ? sendMessage(event) : null
            }
            placeholder="Type a message"
            type="text"
          />
          <button onClick={sendMessage} type="submit">
            Send a message
          </button>
        </form>
        <MicIcon />
        <button className="sendButton" value="">
          <div className="sendIcon">
            <TelegramIcon />
          </div>
        </button>
      </div>
    </div>
  );
}

export default Chat;
