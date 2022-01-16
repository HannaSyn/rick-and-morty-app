import React, {useState} from 'react';
import {getCharPhoto} from '../API/GetCharacters';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';

const CharacterInfo = ({character}) => {
  const [charPhoto, setCharPhoto] = useState('');
  const date = new Date(character.created).toDateString();

  const loadcharPhoto = () => {
    getCharPhoto(character.id)
    .then((response) => {
      setCharPhoto(response.data.data.character.image);
    })
  };

  return (
    <div className="card">
      <h1 className="title">{character.name}</h1>
      {
        charPhoto
        ? 
        <img src={charPhoto} alt="character"/>
        :
        <button className="add-photo btn" onClick={loadcharPhoto}>+ Add Photo</button>
      }
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
      <p>Status: {character.status}</p>
      <p>Location: {character.location?.name || ''}</p>
      <p>Created: {date}</p>
      <Accordion className="accordeon">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}
        >
          <Typography>Episodes: </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {character.episode?.map((e) =>
            <Typography key={e.name}>
              {e.name}
            </Typography>)
            ||
            ''
          }
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default CharacterInfo;
