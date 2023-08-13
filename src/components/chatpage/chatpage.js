// ChatPage.js
import React, { useState } from 'react';
import './chatpage.css'; // You'll need to create this CSS file for styling

const ChatPage = ({ onClose }) => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleSendMessage = () => {
    if (inputText.trim() !== '') {
      setMessages([...messages, { text: inputText, sender: 'me' }]);
      setInputText('');
    }
  };

  const handleClearChat = () => {
    setMessages([]);
    setInputText('');
  };

  return (
   < div className="chatwindow">
  <div className="chatwindowheader">
    <div className="grp-img">
      <img className="i1" src="https://images.unsplash.com/photo-1660476705851-21e527337f9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt=""></img>
    </div>

    <div className="grp-info">
      <h3 className="grp-name">
        Kingsley Francis Okpo
      </h3>
      <p className="grp-status">
        I typically reply within minutes.!!!
      </p>
    </div>
  </div>

  <div className="chatbox">
    <div className="chat">
      <img src="https://images.unsplash.com/photo-1657299143482-4f4ea1ebd71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt=""></img>
      <p className="msg">
        <ion-icon name="caret-back-outline"></ion-icon>
        Hi there! <br></br>
        Looking to get started? I can help answer to your questions!
      </p>
    </div>
    <div className="chat">
      <img src="https://images.unsplash.com/photo-1660481451479-7ad6d6ad0223?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt=""></img>
      <p className="msg">
        <ion-icon name="caret-back-outline"></ion-icon>
        I need a laptop 😊
      </p>
    </div>
  </div>

  <div className="policy">
    
  </div>

  <a href="#" className="close">
    <ion-icon name="close-outline"></ion-icon>
  </a>
</div>
  );
};

export default ChatPage;
