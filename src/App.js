import React from 'react';
import './styles/App.css';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Home from './pages/Home';
import Favorite from './pages/Favorite';



function App() {

  return (
    <BrowserRouter>
      <nav className="navigation">
        <ul className="navigation__list">
          <li>
            <Link to="/home" className="navigation__link">Home</Link>
          </li>
          <li>
            <Link to="/favorite" className="navigation__link">Favorite</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/favorite" element={<Favorite />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
