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
  let image = await axios.get(`https://imdb-api.com/API/FullCast/k_f9hp9nz7/${id}`)
                         .then(res => res)
                         .then(data => data.data)
  return image
}
export async function getTrailer(id){
  let trailer = await axios.get(`https://imdb-api.com/API/YouTubeTrailer/k_f9hp9nz7/${id}`)
                           .then(res => res)
                           .then(data => data.data)
  return trailer
}
export async function getReviews(id){
  let reviews  = await axios.get(`https://imdb-api.com/API/Reviews/k_f9hp9nz7/${id}`)
                            .then(res => res)
                            .then(data => data.data)
  return reviews;
}
export async function getBoxOfficeMovies(){
  let movies = await axios.get(`https://imdb-api.com/API/BoxOfficeAllTime/k_f9hp9nz7`)
                          .then(res => res)
                          .then(data => data.data)
  return movies;                   
}