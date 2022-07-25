import axios from 'axios';
export default async function Popular(){
 let movies = await axios.get('https://imdb-api.com/API/MostPopularMovies/k_vmkgvvcb')
                    .then(res => res)
                    .then(data => data.data)
  return movies
}