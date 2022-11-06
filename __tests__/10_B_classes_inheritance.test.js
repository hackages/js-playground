let __ = undefined;

xdescribe('Class inheritance ES6 ', () => {
  it('Should extends a class declaration/expression', () => {
    class Animal {
      constructor(name) {
        this.name = name;
      }
      eat() {
        return 'Eating...';
      }
      speak() {
        return this.name + ' makes a noise';
      }
    }

    class Dog extends Animal {
      constructor(name) {
        super(name);
      }
      speak() {
        return [super.speak(), this.name + ' barks'];
      }
    }

    const d = new Dog('Mu');
    let actual = d.eat();

    expect(actual).toEqual(__);

    actual = d.speak();

    expect(actual).toEqual(__);
  });

  it('Should extends traditional function-based "classes" ', () => {
    function Animal(name) {
      this.name = name;
    }
    Animal.prototype.eat = function () {
      return 'Eating...';
    };
    Animal.prototype.speak = function () {
      return this.name + ' makes a noise';
    };

    class Dog extends Animal {
      constructor(name) {
        super(name);
      }
      speak() {
        return this.name + ' barks';
      }
    }

    const d = new Dog('Mu');
    let actual = d.eat();

    expect(actual).toEqual(__);

    actual = d.speak();

    expect(actual).toEqual(__);
  });
});
