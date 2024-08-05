import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Whatappchat from './Whatappchat'
import ChatHistory from './ChatHistory'

function App() {

  return (
    <>
    

    <Router>
    <Routes>
      <Route path="/" element={<Whatappchat/>} />
      <Route path="/chat-history" element={<ChatHistory />} />
    </Routes>
  </Router>
    </>
  )
}

export default App
