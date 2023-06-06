import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Greeting from './components/Greeting';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Greeting />} />
        <Route path="/hello" element={<h1>Hello Path</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
