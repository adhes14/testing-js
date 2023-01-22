describe('group 1', () => {
  beforeAll(() => {
    console.log('before all');
    // up db
  });

  afterAll(() => {
    console.log('after all');
  });

  beforeEach(() => {
    console.log('before each group 1');
  });

  afterEach(() => {
    console.log('after each');
  });

  test('case 1', () => {
    console.log('case 1');
    expect(1 + 1).toBe(2);
  });
  test('case 2', () => {
    console.log('case 2');
    expect(1 + 4).toBe(5);
  });

  describe('group 2', () => {
    beforeAll(() => {
      console.log('before all');
      // up db
    });

    beforeEach(() => {
      console.log('before each group 2');
    });

    test('case 3', () => {
      console.log('case 3');
      expect(1 + 1).toBe(2);
    });
    test('case 4', () => {
      console.log('case 4');
      expect(1 + 4).toBe(5);
    });
  });
});
