let __ = undefined;

xdescribe('About Arrays', () => {
  it('should create arrays', () => {
    const emptyArray = [];
    expect(typeof emptyArray).toEqual(__);
    expect(emptyArray.length).toEqual(__);

    const multiTypeArray = [
      0,
      1,
      'two',
      function () {
        return 3;
      },
      { value1: 4, value2: 5 },
      [6, 7],
    ];
    expect(multiTypeArray[0]).toEqual(__);
    expect(multiTypeArray[2]).toEqual(__);
    expect(multiTypeArray[3]()).toEqual(__);
    expect(multiTypeArray[4].value1).toEqual(__);
    expect(multiTypeArray[4]['value2']).toEqual(__);
    expect(multiTypeArray[5][0]).toEqual(__);
  });

  it('should understand array literals', () => {
    const array = [];

    array[0] = 1;
    expect(array).toEqual(__);

    array[1] = 2;
    expect(array).toEqual(__);

    array.push(3);
    expect(array).toEqual(__);
  });

  it('should understand array length', () => {
    let array = [1, 2, 3, 4];

    expect(array.length).toEqual(__);
    array.push(5, 6);
    expect(array.length).toEqual(__);

    array = new Array(10);
    expect(array.length).toEqual(__);

    array.length = 5;
    expect(array.length).toEqual(__);
  });

  it('should slice arrays', () => {
    const array = ['peanut', 'butter', 'and', 'jelly'];

    expect(array.slice(0, 1)).toEqual(__);
    expect(array.slice(0, 2)).toEqual(__);
    expect(array.slice(2, 2)).toEqual(__);
    expect(array.slice(2, 20)).toEqual(__);
    expect(array.slice(3, 0)).toEqual(__);
    expect(array.slice(5, 1)).toEqual(__);
    expect(array.slice(1)).toEqual(__);
    expect(array.slice(0, -1)).toEqual(__);
    expect(array.slice(0, -3)).toEqual(__);
  });

  it('should know array references', () => {
    const array = ['zero', 'one', 'two', 'three', 'four', 'five'];

    function passedByReference(refArray) {
      refArray[1] = 'changed in function';
    }

    passedByReference(array);
    expect(array[1]).toEqual(__);

    const assignedArray = array;
    assignedArray[5] = 'changed in assignedArray';
    expect(array[5]).toEqual(__);

    const copyOfArray = array.slice();
    copyOfArray[3] = 'changed in copyOfArray';
    expect(array[3]).toEqual(__);
  });

  it('should push and pop', () => {
    const array = [1, 2];
    array.push(3);
    expect(array).toEqual(__);

    const poppedValue = array.pop();
    expect(poppedValue).toEqual(__);
    expect(array).toEqual(__);
  });

  it('should transform array', () => {
    const array = ['samih', 'booba'];

    var result = array.map(__);

    expect(result).toEqual(['Samih', 'Booba']);
  });

  it('should filter array', () => {
    const array = ['samih', undefined, 3, 'booba'];
    // Filter values that are not string
    var result = array.filter(__);

    expect(result).toEqual(['samih', 'booba']);
  });

  it('should reduce array', () => {
    const array = ['samih', 'booba'];
    // Should retun the number of characters
    var result = array.reduce(__);

    expect(result).toEqual(10);
  });

  it('should remove duplicate value', () => {
    const array = ['samih', 'booba', 'samih'];
    // Should remove duplicate value
    var result = array.reduce(__);

    expect(result).toEqual(['samih', 'booba']);
  });
});
