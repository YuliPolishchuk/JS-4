function multi(a) {
  return function(b) {
    return a * b; 
  };
}
var multi3 = multi(3);
var multi4 = multi(4);
//console.log(multi(1)(2) );
//console.log(multi(5)(-1) );
//console.log(multi3(2));
//console.log(multi4(2));