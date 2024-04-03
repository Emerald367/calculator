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
            return math.evaluate(a + ' / ' + b);
            break;
      }
}

module.exports = calculate;

