const Person = require('./06-person');

describe('Test for Person', () => {
  let person;
  beforeEach(() => {
    person = new Person('Adhemar', 80, 1.7);
  });

  test('should return down', () => {
    const imc = person.calcIMC();
    expect(imc).toBe('overweight level 1');
  });

  test('should return down', () => {
    person.weight = 59;
    const imc = person.calcIMC();
    expect(imc).toBe('normal');
  });
});
