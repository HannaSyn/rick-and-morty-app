import axios from 'axios';

export const loadChars = async (page) => {
  const response = await axios.post(`https://rickandmortyapi.com/graphql`, 
    {
      query: `{
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
      }`,
      variables: {}
    }, {
      headers: {"Content-Type": "application/json"},
    },)
    
  return response;
}

export const getFilteredChars = async (inputValue) => {
  const response = await axios.post(`https://rickandmortyapi.com/graphql`, 
    {
      query: `{
        characters(filter: { name: "${inputValue}" }) {
          results {
            id,
            name
          }
        }
      }`,
      variables: {}
    }, {
      headers: {"Content-Type": "application/json"},
    },)

  return response;
}
