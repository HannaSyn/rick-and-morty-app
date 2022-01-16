import React from 'react';
import './styles/App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Character from './pages/Character';
import Navigation from './components/Navigation';


function App() {

  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/character" element={<Character />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
