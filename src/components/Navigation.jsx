import React from 'react';
import {Link} from 'react-router-dom';


const Navigation = () => {
  return (
    <div>
      <nav className="navigation">
        <ul className="navigation__list">
          <li>
            <Link to="/" className="navigation__link">Home</Link>
          </li>
          <li>
            <Link to="/favorite" className="navigation__link">Favorite</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;