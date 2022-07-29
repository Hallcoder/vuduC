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
  localStorage.setItem('popular',[])
  localStorage.setItem('intheaters',[])
  localStorage.setItem('comingsoon',[])
}
