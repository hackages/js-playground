let __ = undefined;

xdescribe('Prototype Chain', () => {
  let father = {
    b: 3,
    c: 4,
  };

  let child = Object.create(father);
  child.a = 1;
  child.b = 2;

  it("Is there an 'a' and 'b' own property on child?", () => {
    expect(child.hasOwnProperty('a')).toEqual(__);
    expect(child.hasOwnProperty('b')).toEqual(__);
  });

  it("Is there an 'a' and 'b' property on child?", () => {
    expect(child.a).toEqual(__);
    expect(child.b).toEqual(__);
  });

  it("If 'b' was removed, whats b value?", () => {
    delete child.b;
    expect(child.b).toEqual(__);
  });

  it("Is there a 'c' own property on child?", () => {
    expect(child.hasOwnProperty('c')).toEqual(__);
  });

  it("Is there a 'c' property on child?", () => {
    expect(child.c).toEqual(__);
  });

  it("Is there an 'd' property on child?", () => {
    expect(child.d).toEqual(__);
  });

  it('Who has the masteredJs property?', () => {
    let student = {
      learnJs() {
        this.masteredJs = true;
      },
    };

    let hackagesStudent = Object.create(student);

    hackagesStudent.learnJs();
    expect(hackagesStudent.masteredJs).toEqual(__);
    expect(student.masteredJs).toEqual(__);
  });

  it('Separate prototype', () => {
    let developer = {
      technologies: [],
      learn(tech) {
        this.technologies.push(tech);
      },
    };

    let antho = Object.create(developer);
    let davy = Object.create(developer);

    antho.learn('elixir');

    expect(antho.technologies.length).toEqual(__);
    expect(davy.technologies.length).toEqual(__);
  });
});
