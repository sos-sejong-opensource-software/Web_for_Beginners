function makeCounter(aux) {
    let num = 0;
  
    return function () {
      num = aux(num);
      return num;
    };
}
  