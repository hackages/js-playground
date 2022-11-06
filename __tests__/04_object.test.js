let __ = undefined;

xdescribe('Objects', () => {
  it('object type', () => {
    const empty_object = {};
    expect(typeof empty_object).toEqual(__);
  });

  it('object literal notation', () => {
    let person = {
      __: __,
      __: __,
    };
    expect('Amory Blaine').toEqual(person.name);
    expect(102).toEqual(person.age);
  });

  it('dynamically adding properties', () => {
    const person = {};
    person.__ = 'Amory Blaine';
    person.__ = 102;
    expect('Amory Blaine').toEqual(person.name);
    expect(102).toEqual(person.age);
  });

  it('adding properties from strings', () => {
    const person = {};
    person['__'] = 'Amory Blaine';
    person['__'] = 102;
    expect('Amory Blaine').toEqual(person.name);
    expect(102).toEqual(person.age);
  });

  it('shallow copy object', () => {
    const person = {
      one: 'one',
      two: 'two',
      three: 'three',
      four: 'four',
      five: 'five',
    };

    // Create a copy of the object to manipulate it
    let result = __;

    expect(person).not.toBe(result);
    expect(person).toEqual({
      one: 'one',
      two: 'two',
      three: 'three',
      four: 'four',
      six: 'six',
    });
  });

  it('return the number of keys', () => {
    let person = { name: 'Amory', age: 24, isAdmin: true };
    const nbKeys = __;
    expect(nbKeys).toEqual(3);
  });

  it('check existence', () => {
    let person = { name: 'Amory', age: 24, isAdmin: true };
    function hasKey(value) {
      // return true if person has a key named `value`. Otherwise return false
    }
    expect(hasKey('name')).toEqual(true);
    expect(hasKey('company')).toEqual(false);
  });

  it('lowercase key names', () => {
    let person = { Name: 'Amory', Age: 24, IsAdmin: true };

    let result = __;
    expect(result).toEqual({ name: 'Amory', age: 24, isAdmin: true });
  });
});
