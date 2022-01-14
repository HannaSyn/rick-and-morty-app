import React from 'react';

const CharacterInfo = ({character}) => {
  const date = new Date(character.created).toDateString();

  return (
    <div>
      <h1>{character.name}</h1>
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
          <li></li>
        }
      </ul>
    </div>
  );
};

export default CharacterInfo;
