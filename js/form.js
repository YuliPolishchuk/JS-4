let form = {
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
    value: 'email@example.com',
    validationRules: {
      email: true,
      required: true,
    },
    errorMessage: 'invalid email',
  },
};

let validator = {
  rules: {
    required: (value) => !!value,
    minLength: (value, length) => value.length >= length,
    maxLength: (value, length) => value.length <= length,
    // fast validation
    email: (value) => value.indexOf('@') !== -1 && value.indexOf('.') !== -1,
  },
  rulesPriority: ['required', 'minLength', 'maxLength', 'email'],
  validate(form) {
    return Object.keys(form).every((fieldName) => {
      let valid = this.validateField(form[fieldName].value, form[fieldName].validationRules);
      if (!valid) console.log(form[fieldName].errorMessage);
      return valid;
    });
  },
  validateField(value, rules) {
    let rulesList = this.rulesPriority.reduce((accumulator, currentRule) => {
      if (rules.hasOwnProperty(currentRule)) accumulator.push(currentRule);
      return accumulator;
    }, []);

    return rulesList.every((currentRule) => {
      return this.rules[currentRule](value, rules[currentRule]);
    });
  },
};

console.log(validator.validate(form));
