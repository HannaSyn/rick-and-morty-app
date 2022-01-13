import React from 'react';

const CharacterItem = ({ char }) => {

  return (
    <li className="list__item">
      <a href="#">
        <p className="name">Name: {char.name}</p>
        <span className="status">Status: {char.status}</span>
      </a>
    </li>
  );
};

export default CharacterItem;
