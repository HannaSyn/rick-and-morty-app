import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './styles/App.css';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


function App() {
  
  const [chars, setChars] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const loadChars = async (page) => {
      const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
      console.log(response.data)
      setChars(response.data.results)
      setPageCount(response.data.info.pages)
    }
    loadChars(page)
  }, [page])
  
  const changePage = (event) => {
    setPage(parseInt(event.target.innerText));
  };

  return (
    <div className="App">
      <div>
        <h1 className="title">Rick and Morty characters</h1>
        {/* <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={api.results}
          getOptionLabel={(option) => option.name}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Choose character" />}
        /> */}
        <ul className="list">
          {chars.map((char) =>
            <li
              className="list__item"
              key={char.id}
            >
              <a href="#">
                <p className="name">Name: {char.name}</p>
                <span className="status">Status: {char.status}</span>
              </a>
            </li>
          )}
        </ul>
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
