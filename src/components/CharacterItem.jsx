import React from 'react';
import {Link} from 'react-router-dom';


const CharacterItem = ({char}) => {
  return (
    <li className="list__item">
      <Link 
        to="/character"
        state={{charId: char.id}}
        className="navigation__link">
        <p className="name">Name: {char.name}</p>
        <span className="status">Status: {char.status}</span>
      </Link>
    </li>
  );
};

export default CharacterItem;
