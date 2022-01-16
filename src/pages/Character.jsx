import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { getCharById } from '../API/GetCharacters';
import CharacterInfo from '../components/CharacterInfo';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

const Character = () => {
  const [character, setCharacter] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [errorChars, setErrorChars] = useState('');

  const location = useLocation();
  const characterId = location.state.charId;

  useEffect(() => {
    setIsLoading(true);
    getCharById(characterId)
    .then((response) => {
      setCharacter(response.data.data.character);  
    })
    .catch((error) => setErrorChars(error.message))
    .finally(() => setIsLoading(false))
  }, [characterId]);

  return (
    <div className="container">
      {
        isLoading 
        ?
        <Stack sx={{color: '#d8bcb5', justifyContent: 'center'}} spacing={2} direction="row">
          <CircularProgress color="inherit" />
        </Stack>
        :
        <CharacterInfo character={character}/>
      }
      {
        errorChars &&
        <h2>Error: {errorChars}</h2>
      }
    </div>
  );
};

export default Character;
