import React from 'react';
import './styles/App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Character from './pages/Character';
import Favorite from './pages/Favorite';
import Navigation from './components/Navigation';


function App() {

  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/character" element={<Character />}/>
        <Route path="/favorite" element={<Favorite />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
