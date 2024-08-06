import React, { useReducer, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './card.css';

const historyReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_HISTORY':
      return [...state, action.payload];
    case 'INIT_HISTORY':
      return action.payload;
    default:
      return state;
  }
};

const WhatsAppChat = () => {
  const [phoneNumber, setPhoneNumber] = React.useState('+91');
  const [history, dispatch] = useReducer(historyReducer, []);
  const navigate = useNavigate();

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem('chatHistory')) || [];
    dispatch({ type: 'INIT_HISTORY', payload: savedHistory });
  }, []);

  const openWhatsApp = () => {
    if (phoneNumber) {
      const cleanedNumber = phoneNumber.replace(/\D/g, '');
      const url = `https://wa.me/${cleanedNumber}`;
      window.open(url, '_blank');

      dispatch({ type: 'ADD_HISTORY', payload: phoneNumber });
      localStorage.setItem('chatHistory', JSON.stringify([...history, phoneNumber]));

      setPhoneNumber('+91');
    }
  };

  const openHistoryPage = () => {
    navigate('/chat-history');
  };

  return (
    <>
    <div className='card'>
      <div>
        <h1 className='h1_open_wa'>Open Whatsapp Directly</h1>
        <input
          className='input_card'
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Enter phone number with country code"
        />
        <br />
        <button className='btn_card' onClick={openWhatsApp}>Open WhatsApp Chat</button>
      </div>
      <br />
      <button className='btn_card down' onClick={openHistoryPage}>
        Chat History
      </button>
    </div>
    <p className='p_shailendra'>Developer <span className='span_shail'>@Shailendra</span></p>
    </>
  );
};

export default WhatsAppChat;
