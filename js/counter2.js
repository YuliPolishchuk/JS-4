function counter() {
  var count = 0;
  return {
    counts : function() {
      count++;
      return count;
    }
  }  
}
var numberCount = counter();
console.log(numberCount.counts());
