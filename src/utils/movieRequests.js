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
export async function getFullCast(id){
  let image = await axios.get(`https://imdb-api.com/API/FullCast/k_vmkgvvcb/${id}`)
                         .then(res => res)
                         .then(data => data.data)
  return image
}
export async function getTrailer(id){
  let trailer = await axios.get(`https://imdb-api.com/API/YouTubeTrailer/k_vmkgvvcb/${id}`)
                           .then(res => res)
                           .then(data => data.data)
  return trailer
}