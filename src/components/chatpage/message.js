import React from 'react';

const Message = ({ message }) => {
  const senderClass = message.sender ? 'sender' : 'receiver';
  const statusClass = message.status === 'read' ? 'read' : 'sent';

  return (
    <div className={`message ${senderClass}`}>
      <div className={`message-avatar ${statusClass}`}>
        <img src={message.sender ? 'sender-avatar.jpg' : 'receiver-avatar.jpg'} alt="Avatar" />
      </div>
      <div className="message-text">{message.text}</div>
    </div>
  );
};

export default Message;
