import { API_URL } from './settings';

export default function getNews({ query = 'angular,reactjs,vuejs', page = 0} = {}) {
  const URL = API_URL
  return fetch(
    `${URL}query=${query}&page=${page}`
  )
    .then((response) => response.json())
    .then((data) => data.hits)
    .catch((error) => {
      console.error(error)
      return [];
    });
}