import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ch.css';

const ChatHistory = () => {
  const [history, setHistory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem('chatHistory')) || [];
    setHistory(savedHistory);
  }, []);

  const handleDelete = (index) => {
    const updatedHistory = history.filter((_, i) => i !== index);
    setHistory(updatedHistory);
    localStorage.setItem('chatHistory', JSON.stringify(updatedHistory));
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  const handleNavigate = () => {
    navigate('/'); // Use the path to your WhatsAppChat route
  };

  return (
    <div className='history'>
      <h1>Chat History</h1>
      <ul>
        {history.map((number, index) => (
          <li key={index} className='margin_b'>
            {number}
            <button className='btn_del' onClick={() => handleDelete(index)}>Delete</button>
            <button className='btn_copy' onClick={() => handleCopy(number)}>Copy</button>
          </li>
        ))}
      </ul>
      <button className='btn_nav' onClick={handleNavigate}>Go to Home</button>
    </div>
  );
};

export default ChatHistory;
