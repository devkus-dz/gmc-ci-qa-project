import Calculator from './Calculator.js';

// Creating a new object (instance) of the Calculator class
const calc = new Calculator();

// the unit tests
test('adds 1 + 2 to equal 3', () => {
  expect(calc.add(1, 2)).toBe(3);
});

test('subtracts 5 - 2 to equal 3', () => {
  expect(calc.subtract(5, 2)).toBe(3);
});