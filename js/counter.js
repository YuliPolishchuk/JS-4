var numberCount = counter();
console.log(numberCount());
console.log(numberCount());
console.log(numberCount());

function counter() {
  var count = 0;
  return function() {
    count++;
    return count;
  }  
}

