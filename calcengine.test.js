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