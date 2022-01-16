import React, {useState, useEffect} from 'react';
import {loadChars} from '../API/GetCharacters';
import CharacterAutocomplete from '../components/CharacterAutocomplete';
import CharacterList from '../components/CharacterList';
import CharacterPagination from '../components/CharacterPagination';


function Home() {
  
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
    <div className="main">
      <div className="container">
        <CharacterAutocomplete/>
        <h1 className="title">Rick and Morty characters</h1>
        <CharacterList chars={chars}/>
        <CharacterPagination page={page} pageCount={pageCount} changePage={changePage}/>
      </div>
    </div>
  );
}

export default Home;
