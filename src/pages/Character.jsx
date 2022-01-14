import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { getCharById } from '../API/GetCharacters';

const Character = () => {
  const [character, setCharacter] = useState({});

  const location = useLocation();
  const characterId = location.state.charId;

  useEffect(() => {
    getCharById(characterId)
    .then((response) => {
      console.log(response.data.data.character.location);
      setCharacter(response.data.data.character);  
    })
    .catch((error) => console.log(error))

  }, [])

  return (
    <div className="container">
      <div>
        <h1>{character.name}</h1>
        <p>{character.species}</p>
        <p>{character.gender}</p>
        <p>{character.status}</p>
        <p>{character.location ? character.location.name : ''}</p>
        <p>{character.created}</p>
      </div>
    </div>
  );
};

export default Character;