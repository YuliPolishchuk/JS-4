var numberCount = counter();
console.log(numberCount.counts());
console.log(numberCount.counts());

function counter() {
  var count = 0;
  return {
    counts: function() {
      count++;
      return count;
    }
  }  
}


