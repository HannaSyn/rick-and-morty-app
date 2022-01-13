import React from 'react';
import CharacterItem from './CharacterItem';

const CharacterList = ({chars}) => {

  return (
    <ul className="list">
      {chars.map((char) =>
        <CharacterItem char={char} key={char.id}/>
      )}
    </ul>
  );
};

export default CharacterList;
