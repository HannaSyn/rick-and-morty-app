import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { getCharById } from '../API/GetCharacters';
import CharacterInfo from '../components/CharacterInfo';

const Character = () => {
  const [character, setCharacter] = useState({});

  const location = useLocation();
  const characterId = location.state.charId;

  useEffect(() => {
    getCharById(characterId)
    .then((response) => {
      console.log(response.data.data.character);
      setCharacter(response.data.data.character);  
    })
    .catch((error) => console.log(error))

  }, [characterId])

  return (
    <div className="container">
      <CharacterInfo character={character}/>
    </div>
  );
};

export default Character;
