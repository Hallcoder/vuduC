export default function findById(movies,id){
    let movie = JSON.parse(movies).find(movie => movie.id === id);
    return movie ? movie : {title:'Not found'};
}