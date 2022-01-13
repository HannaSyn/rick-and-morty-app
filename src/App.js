import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './styles/App.css';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


function App() {
  
  const [chars, setChars] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [page, setPage] = useState(1);
  const [inputValue, setInputValue] = useState('');
  const [filteredChars, setFilteredChars] = useState([]);

  // useEffect(() => {
  //   const loadChars = async (page) => {
  //     const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
  //     console.log(response.data);
  //     setChars(response.data.results);
  //     setPageCount(response.data.info.pages);
  //   }
  //   loadChars(page)
  // }, [page])
  
  const query = `{
    characters(page: ${page}) {
      info {
        pages
      }
      results {
        id,
        name,
        status
      }
    }
  }`

  const filterQuery = `{
    characters(filter: { name: "${inputValue}" }) {
      results {
        id,
        name
      }
    }
  }`

  useEffect(() => {
    const getFilteredChars = async () => {
      await axios.post(`https://rickandmortyapi.com/graphql`, 
      {
        query: filterQuery,
        variables: {}
      }, {
        headers: {"Content-Type": "application/json"},
      },)
      .then((response) => {
        console.log('filtered' + response);
        setFilteredChars(response.data.data.characters.results);  
      })
      .catch((error) => console.log(error))
    }

    getFilteredChars();
  }, [inputValue])

  useEffect(() => {
    const loadChars = async () => {
      await axios.post(`https://rickandmortyapi.com/graphql`, 
      {
        query: query,
        variables: {}
      }, {
        headers: {"Content-Type": "application/json"},
      },)
      .then((response) => {
        console.log('allChars' + response);
        setChars(response.data.data.characters.results);
        setPageCount(response.data.data.characters.info.pages);     
      })
      .catch((error) => console.log(error))
    }

    loadChars();
  }, [page])

  const handleInputChange = (e, value) => {
    setInputValue(value)
  }

  const changePage = (event) => {
    setPage(parseInt(event.target.innerText));
  };

  const openDetails = (e, value) => {
    console.log(value);
  }

  return (
    <div className="App">
      <div>
        <h1 className="title">Rick and Morty characters</h1>
        <Autocomplete
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
