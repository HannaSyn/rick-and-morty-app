import React, {useState} from 'react';
import {getCharPhoto} from '../API/GetCharacters';


const CharacterInfo = ({character}) => {
  const date = new Date(character.created).toDateString();
  const [charPhoto, setCharPhoto] = useState('');

  const loadcharPhoto = () => {
    getCharPhoto(character.id)
    .then((response) => {
      console.log(response);
      setCharPhoto(response.data.data.character.image);
    })
    .catch((error) => console.log(error))
  }

  return (
    <div>
      <h1>{character.name}</h1>
      {
        charPhoto
        ? 
        <img src={charPhoto} alt="chatacter-photo"/>
        :
        <button onClick={loadcharPhoto}>+ Add Photo</button>
      }
      <p>{character.species}</p>
      <p>{character.gender}</p>
      <p>{character.status}</p>
      <p>{character.location?.name || ''}</p>
      <p>{date}</p>
      <ul>
        Episodes:
        {character.episode?.map((e) =>
          <li key={e.name}>{e.name}</li>)
          ||
          ''
        }
      </ul>
    </div>
  );
};

export default CharacterInfo;
