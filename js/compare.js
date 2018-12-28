function comparePassword(originalPass) {
  var attempts = 0;
  return function(userPass) {
    attempts++;
  	if (attempts > 5) {
    	alert('Много попыток');
      return;
    }
    return originalPass === userPass;
  };
};

