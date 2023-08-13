import React, { useState } from 'react';
import ChatPage from './chatpage';
import './message.css'
const Message = ({ message }) => {
  const [isChatOpen, setIsChatOpen] = useState(true);

  const openChat = () => {
    setIsChatOpen(false);
  };

  const closeChat = () => {
    setIsChatOpen(false);
  };

  return (
    <div className="chatwindow-container">
      <button className="message-icon" onClick={openChat}>
        <img src="message-icon.png" alt="Message Icon" />
      </button>
      {isChatOpen && <div className="backdrop"></div>}
      {isChatOpen && <ChatPage onClose={closeChat} />}
    </div>
  );
};

export default Message;

