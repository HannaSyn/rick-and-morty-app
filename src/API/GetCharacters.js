import axios from 'axios';

const url = 'https://rickandmortyapi.com/graphql'

export const loadChars = async (page) => {
  const response = await axios.post(url, 
    {
      query: `{
        characters(page: ${page}) {
          info {
            pages
          }
          results {
            id
            name
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
  const response = await axios.post(url, 
    {
      query: `{
        characters(filter: { name: "${inputValue}" }) {
          results {
            id
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

export const getCharById = async (id) => {
  const response = await axios.post(url, 
    {
      query: `{
        character(id: ${id}) {
          id
          name
          species
          gender
          status
          created
          location {
            name
          },
          episode {
            name
          },
        }
      } `,
      variables: {}
    }, {
      headers: {"Content-Type": "application/json"},
    },)

  return response;
}

export const getCharPhoto = async (id) => {
  const response = await axios.post(url, 
    {
      query: `{
        character(id: ${id}) {
          image
        }
      }`,
      variables: {}
    }, {
      headers: {"Content-Type": "application/json"},
    },)

  return response;
}
