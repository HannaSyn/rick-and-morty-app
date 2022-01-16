import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import AuthFacebook from './AuthFacebook';

const Navigation = () => {
  const [authName, setAuthName] = useState('');

  const getAuthName = (name) => {
    setAuthName(name);
    console.log(name);
  };

  return (
    <div>
      <nav className="navigation">
        <ul className="navigation__list">
          <li>
            <Link to="/" className="navigation__link">Home</Link>
          </li>
          <li>
            {
              authName 
              ?
              <p>{authName}</p> 
              :
              <AuthFacebook getAuthName={getAuthName}/>
            }
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
