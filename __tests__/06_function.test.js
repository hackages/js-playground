let __ = undefined;

xdescribe('About Functions', () => {
  it('should declare function: add', () => {
    // Create the add function
    expect(add(1, 2)).toEqual(3);
  });

  it('should know variables overriding', () => {
    let message = 'Outer';

    function getMessage() {
      return message;
    }

    function overrideMessage() {
      message = 'Inner';
      return message;
    }

    expect(getMessage()).toEqual(__);
    expect(overrideMessage()).toEqual(__);
    expect(message).toEqual(__);
  });

  it('should have default argument', () => {
    function getMessage(message) {
      return `Message: ${message}`;
    }

    expect(getMessage()).toEqual('Message: no message');
    expect(getMessage('hello')).toEqual('Message: hello');
  });

  it('should have lexical scoping', () => {
    let variable = 'top-level';
    function parentfunction() {
      let variable = 'local';
      function childfunction() {
        return variable;
      }
      return childfunction();
    }
    expect(parentfunction()).toEqual(__);
  });

  it('should use lexical scoping to synthesise functions', () => {
    function makeMysteryFunction(makerValue) {
      const newFunction = function doMysteriousThing(param) {
        return makerValue + param;
      };
      return newFunction;
    }

    const mysteryFunction3 = makeMysteryFunction(3);
    const mysteryFunction5 = makeMysteryFunction(5);

    expect(mysteryFunction3(10) + mysteryFunction5(5)).toEqual(__);
  });

  it('should manage arguments', () => {
    function firstFunction(firstArg) {
      return firstArg;
    }

    expect(firstFunction('first', 'second', 'third')).toEqual(__);

    function secondFunction(firstArg, secondArg) {
      return secondArg;
    }

    expect(secondFunction('arguments')).toEqual(__);

    // TODO: Fix the function to return all arguments.
    function returnAllArgs() {}

    expect(returnAllArgs('first', 'second', 'third')).toEqual([
      'first',
      'second',
      'third',
    ]);
  });
});
