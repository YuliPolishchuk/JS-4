var form = {
  name: {
    value: 'Masha',
    validationRules: {
      minLength: 3,
      maxLength: 20,
      required: true,
    },
    errorMessage: 'invalid name',
  },
  email: {
    value: '',
    validationRules: {
      email: true,
      required: false,
    },
    errorMessage: 'invalid email',
  },
};

var validator = {
  rules: {
    required: (value, checkRequired) => !checkRequired || !!value,
    minLength: (value, length) => value.length >= length,
    maxLength: (value, length) => value.length <= length,
    email: (value, checkRequired) => !checkRequired || (value.indexOf('@') !== -1 && value.indexOf('.') !== -1),
  },
  rulesPriority: ['required', 'minLength', 'maxLength', 'email'],
  validate(form) {
    return Object.keys(form).every((fieldName) => {
      var valid = this.validateField(form[fieldName].value, form[fieldName].validationRules);
      if (!valid) console.log(form[fieldName].errorMessage);
      return valid;
    });
  },
  validateField(value, rules) {
  	if(rules.required === false && !value) return true;
    
    var rulesList = this.rulesPriority.reduce((accumulator, currentRule) => {
      if (rules.hasOwnProperty(currentRule)) accumulator.push(currentRule);
      return accumulator;
    }, []);

    return rulesList.every((currentRule) => {
      return this.rules[currentRule](value, rules[currentRule]);
    });
  },
};

console.log(validator.validate(form));
