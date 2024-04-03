const math = require('mathjs');

function calculate(a, b, operation) {
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

          default:
            return "Invalid Operation";
      }
}

module.exports = calculate;

