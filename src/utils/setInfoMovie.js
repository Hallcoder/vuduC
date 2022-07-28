export function setfullCast(cast,id){
  if(cast && Object.keys(cast).length !== 0){
    localStorage.setItem(`cast-${id}`,JSON.stringify(cast))
    return;
  }
  return;
}
export function setPoster(posters,id){
    if(posters.length !== 0){
        localStorage.setItem(`posters-${id}`,JSON.stringify(posters));
        return;
    }
    return;
}
export function setMovieTrailer(trailer,id){
  if(trailer && Object.keys(trailer).length !== 0){
      localStorage.setItem(`trailer-${id}`,JSON.stringify(trailer));
      return
  }
  return;
}
export function setLocalReviews(reviews,id){
  if(reviews && reviews.length !== 0){
      localStorage.setItem(`reviews-${id}`,JSON.stringify(reviews));
      return;
  }
  return;
}
