export function setfullCast(cast,id){
  if(Object.keys(cast).length !== 0){
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
export function setTrailer(trailer,id){
  if(Object.keys(trailer).length !== 0){
      localStorage.setItem(`trailer-${id}`,JSON.stringify(trailer));
      return
  }
  return;
}