let __ = undefined;

xdescribe('Strings', () => {
  it('concatenation', () => {
    const fruit = 'apple';
    const dish = 'pie';
    expect(__).toEqual('apple pie');
  });

  it('character', () => {
    const name = 'Amory';
    const m = __;
    expect(m).toEqual('m');
  });
  it('character Type', () => {
    const characterType = typeof 'Amory'.charAt(1);

    expect(characterType).toEqual(__);
  });

  it('string.length', () => {
    const fruit = 'apple';
    expect(fruit.length).toEqual(__);
  });

  it('slice', () => {
    const fruit = 'apple pie';
    expect(fruit.slice(0, 5)).toEqual(__);
  });

  it('split', () => {
    const fruit = 'apple';
    const result = __;
    expect(result).toEqual(['a', 'p', 'p', 'l', 'e']);
  });
});
