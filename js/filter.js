var arr = [1, 2, 3, 4, 5, 6, 7];
function filter(arr, func){
  var result = [];
  for(var i = 0; i < arr.length; i++){
    if(func(arr[i])){
      result.push(arr[i]);
    }
  }
  return result;
}

function inBetween(min, max){
  return function  inBetweenInner(val){
  if( val >= min && val <= max){
    return true;
  }
  return false;
  };
}
console.log( filter(arr, inBetween(3, 6)) );

function inArray(arr) {
  return function(val) {
    return arr.indexOf(val) != -1;
  };
}

console.log( filter(arr, inArray([1, 2, 10])) );

console.log(filter(arr, function(a) {
  return a % 2 == 0
}));