import axios from 'axios';
export  async function Popular(){
 let movies = await axios.get('https://imdb-api.com/API/MostPopularMovies/kvmkgvvcb')
                    .then(res => res)
                    .then(data => data.data)
  return movies
}
export async function InTheaters(){
  let movies   = await axios.get('https://imdb-api.com/API/InTheaters/k_vmkgvvcb')
                            .then(res =>  res)
                            .then(data => data.data)
  return movies
}
export async function comingSoon(){
  let movies = await axios.get('https://imdb-api.com/API/ComingSoon/k_vmkgvvcb')
                          .then(res => res)
                          .then(data => data.data)
  return movies
} 