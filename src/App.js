import React, {useState, useEffect} from 'react';
import './styles/App.css';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import CharacterAutocomplete from './components/CharacterAutocomplete';
import CharacterList from './components/CharacterList';
import { loadChars } from './API/GetCharacters';


function App() {
  
  const [chars, setChars] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [page, setPage] = useState(1);

  useEffect(() => {
      loadChars(page)
      .then((response) => {
        console.log('allChars' + response);
        setChars(response.data.data.characters.results);
        setPageCount(response.data.data.characters.info.pages);     
      })
      .catch((error) => console.log(error))
  }, [page])

  const changePage = (event) => {
    setPage(parseInt(event.target.innerText));
  };

  return (
    <div className="App">
      <div>
        <h1 className="title">Rick and Morty characters</h1>
        <CharacterAutocomplete/>
        <CharacterList chars={chars}/>
        <div className="pagination">
          <Stack spacing={2}>
            <Pagination 
              count={pageCount} 
              variant="outlined"
              page={page}
              onChange={changePage}
            />
          </Stack>
        </div>
      </div>
    </div>
  );
}

export default App;
