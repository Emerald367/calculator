const calculate = require('./calcengine');

test('add operation', () => {
    expect(calculate(2, 2, 'add')).toBe(4);
});

test('subtract operation', () => {
    expect(calculate(5, 2, 'subtract')).toBe(3);
});

test('multiply operation', () => {
    expect(calculate(4, 2, 'multiply')).toBe(8);
});

test('division operation', () => {
    expect(calculate(10, 5, 'division')).toBe(2);
});

test('division by zero', () => {
    expect(calculate(2, 0, 'division')).toBe('Error: Division by zero');
});

test('decimal precision', () => {
    expect(calculate(0.3, 0.5, 'add')).toBe(0.8);
    expect(calculate(0.5, 0.3, 'subtract')).toBe(0.2);
    expect(calculate(0.5, 0.3, 'multiply')).toBe(0.15);
    expect(calculate(0.15, 0.3, 'division')).toBe(0.5);
})

test('numeric value', () => {
    expect(calculate(NaN, 0.5, 'add')).toBe('Error: Inputs must be numbers')
})

test('valid operation', () => {
    expect(calculate(5, 6, 'sqrt')).toBe('Error: Not a valid operation')
})


