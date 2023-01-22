const { sum, multiply, divide } = require('./02-math');

test('adds 1 + 3 should be 4', () => {
  const rta = sum(1, 3);
  expect(rta).toBe(4);
});

test('multiply 1 * 3 should be 3', () => {
  const rta = multiply(1, 3);
  expect(rta).toBe(3);
});

test('divide by 0', () => {
  const rta = divide(1, 0);
  expect(rta).toBeNull();
});
