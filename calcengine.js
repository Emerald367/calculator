const math = require('mathjs');
const decimal = require('decimal.js');

function calculate(a, b, operation) {
      if (isNaN(a) || isNaN(b)) {
        return 'Error: Inputs must be numbers'
      }

      if (!['add', 'subtract', 'multiply', 'division'].includes(operation)) {
        return 'Error: Not a valid operation'
      }

      switch(operation) {
          case 'add':
            return math.evaluate(a + ' + ' + b);
            break;

          case 'subtract':
            return math.evaluate (a + ' - ' + b);
            break;

          case 'multiply':
            return math.evaluate(a + ' * ' + b);
            break;

          case 'division':
            if (b === 0) {
              return 'Error: Division by zero'
            } else {
              return math.evaluate(a + ' / ' + b);
            }
            break; 
      }
}

module.exports = calculate;

