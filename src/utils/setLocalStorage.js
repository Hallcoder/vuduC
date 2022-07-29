export  function setLocalStorage(popular, intheaters, comingsoon) {
  if (popular.length !== 0) {
    localStorage.setItem("popular", JSON.stringify(popular));
  }
  if (intheaters.length !== 0) {
    localStorage.setItem("intheaters", JSON.stringify(intheaters));
  }
  if (comingsoon.length !== 0) {
    localStorage.setItem("comingsoon", JSON.stringify(comingsoon));
  }
  return;
}
export function setTemplate(){
  if(localStorage.getItem('popular') && localStorage.getItem('intheaters') && localStorage.getItem('comingsoon')){
    return;
  }else{
    localStorage.setItem('popular',JSON.stringify([]))
    localStorage.setItem('intheaters',JSON.stringify([]))
    localStorage.setItem('comingsoon',JSON.stringify([]))
  }
  return;
}
