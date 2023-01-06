function makeCounter(aux) {
    let num = 0;
  
    return function () {
      num = aux(num);
      return num;
    };
  }
function hi (hihi){
    let a = 0;
}