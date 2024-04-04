const math = require('mathjs');
const decimal = require('decimal.js');
module.exports = { calculate, parenthesesChecker };

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

function parenthesesChecker(str) {
   const stack = [];
   const pairs = {
       "(": ")",
   };

   for (let char of str) {
     if (pairs[char]) {
        stack.push(char);
     } else if (
        char === ")"
     ) {
        let lastOpenParenthesis = stack.pop()
         if (
            pairs[lastOpenParenthesis] !== char
         ) {
            return false;
         }
     }
   }
   return stack.length === 0;
}


function Node(operation, left, right) {
    this.operation = operation;
    this.left = left;
    this.right = right;
}
