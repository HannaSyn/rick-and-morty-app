import React, {useState, useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {getFilteredChars} from '../API/GetCharacters';
import {useNavigate} from 'react-router-dom';

const CharacterAutocomplete = () => {
  const [inputValue, setInputValue] = useState('');
  const [filteredChars, setFilteredChars] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
      getFilteredChars(inputValue)
      .then((response) => {
        console.log('filtered' + response);
        setFilteredChars(response.data.data.characters.results);  
      })
      .catch((error) => console.log(error))
  
  }, [inputValue])

  const handleInputChange = (e, value) => {
    setInputValue(value)
  }

  const openDetails = (e, value) => {
    navigate('/character', {replace: true, state:{charId: value.id}});
    console.log(value);
  }

  return (
    <Autocomplete
      className="autocomplete"
      disablePortal
      id="autocomplete"
      options={filteredChars}
      renderOption={(props, option) => {
        return (
          <li {...props} key={option.id}>
            {option.name}
          </li>
        );
      }}
      isOptionEqualToValue={(option, value) => option !== value}
      getOptionLabel={(option) => option.name}
      renderInput={(params) => <TextField {...params} label="Choose character" />}
      onInputChange={handleInputChange}
      onChange={openDetails}
    />
  );
};

export default CharacterAutocomplete;
