import React, { useState } from 'react';
import './chatpage.css'; 
import Message from './message'; // Make sure to provide the correct path

const ChatPage = () => {
  const [messages, setMessages] = useState([
    { text: 'Hello!', sender: true, status: 'sent' },
    { text: 'Hi there!', sender: false, status: 'read' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleClose = () => {
    // Implement logic to close the chat page
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    const newMessageObj = { text: newMessage, sender: true, status: 'sent' };
    setMessages([...messages, newMessageObj]);

    // Simulate a response after a delay
    setTimeout(() => {
      const responseMessage = { text: 'Got your message!', sender: false, status: 'read' };
      setMessages([...messages, responseMessage]);
    }, 1000);

    setNewMessage('');
  };

  return (
    <div className="chat-page">
      <div className="chat-header">
        <span className="chat-title">Chat with Kingsley</span>
        <span className="close-icon" onClick={handleClose}>
          &#x2715;
        </span>
      </div>
      <div className="chat-messages">
        {messages.map((message, index) => (
          <Message key={index} message={message} />
        ))}
      </div>
      <div className="message-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatPage;
