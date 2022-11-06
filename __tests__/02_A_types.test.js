let __ = undefined;

xdescribe('typeof...', () => {
  it('object, number, boolean, string, function...', () => {
    expect(typeof {}).toEqual(__);
    expect(typeof []).toEqual(__);
    expect(typeof 'hackages').toEqual(__);
    expect(typeof -5).toEqual(__);
    expect(typeof false).toEqual(__);
    expect(typeof NaN).toEqual(__);
    expect(typeof undefined).toEqual(__);
    expect(typeof null).toEqual(__);
    expect(typeof Symbol(12)).toEqual(__);
    expect(typeof function () {}).toEqual(__);
  });

  it('Everything is an object', () => {
    expect(Object.prototype.toString.call({})).toEqual(__);
    expect(Object.prototype.toString.call([])).toEqual(__);
    expect(Object.prototype.toString.call('hackages')).toEqual(__);
    expect(Object.prototype.toString.call(-5)).toEqual(__);
    expect(Object.prototype.toString.call(false)).toEqual(__);
    expect(Object.prototype.toString.call(NaN)).toEqual(__);
    expect(Object.prototype.toString.call(undefined)).toEqual(__);
    expect(Object.prototype.toString.call(null)).toEqual(__);
    expect(Object.prototype.toString.call(Symbol(12))).toEqual(__);
    expect(Object.prototype.toString.call(function () {})).toEqual(__);
  });
});
