import React, {useState, useEffect} from 'react';
import {loadChars} from '../API/GetCharacters';
import CharacterAutocomplete from '../components/CharacterAutocomplete';
import CharacterList from '../components/CharacterList';
import CharacterPagination from '../components/CharacterPagination';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

function Home() {
  const [chars, setChars] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [errorChars, setErrorChars] = useState('');

  useEffect(() => {
      setIsLoading(true);
      loadChars(page)
      .then((response) => {
        setChars(response.data.data.characters.results);
        setPageCount(response.data.data.characters.info.pages);  
      })
      .catch((error) => setErrorChars(error.message))
      .finally(() => setIsLoading(false))
  }, [page]);

  const changePage = (event) => {
    setPage(parseInt(event.target.innerText));
  };

  return (
    <div className="main">
      <div className="container">
        <CharacterAutocomplete/>
        <h1 className="title">Rick and Morty characters</h1>
        {
          isLoading && 
          <Stack sx={{color: '#d8bcb5', justifyContent: 'center'}} spacing={2} direction="row">
            <CircularProgress color="inherit" />
          </Stack>
        }
        {
          errorChars &&
          <h2>Error: {errorChars}</h2>
        }
        <CharacterList chars={chars}/>
        <CharacterPagination page={page} pageCount={pageCount} changePage={changePage}/>
      </div>
    </div>
  );
}

export default Home;
