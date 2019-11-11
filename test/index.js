import { expect } from "chai"
import * as Validate from "../src/js/lib/validate"
import * as Filter from "../src/js/lib/filter"
import * as Data from "../src/js/lib/data"

describe("Validate", () => {
  it("string should contain only digits", () => {
    const p1 = 'hello',
      p2 = '2hello',
      p3 = 'hello2';

    expect(Validate.isStringNumber(p1)).to.be.false;
    expect(Validate.isStringNumber(p2)).to.be.false;
    expect(Validate.isStringNumber(p3)).to.be.false;
  })
});

describe("Filter", () => {
  it("should return true if number contain specific digit", () => {
    const p1 = 123456789;

    expect(Filter.excludeNumberWithDigit(p1, 1)).to.be.true;
    expect(Filter.excludeNumberWithDigit(p1, 2)).to.be.true;
    expect(Filter.excludeNumberWithDigit(p1, 3)).to.be.true;
    expect(Filter.excludeNumberWithDigit(p1, 4)).to.be.true;
    expect(Filter.excludeNumberWithDigit(p1, 5)).to.be.true;
    expect(Filter.excludeNumberWithDigit(p1, 6)).to.be.true;
    expect(Filter.excludeNumberWithDigit(p1, 7)).to.be.true;
    expect(Filter.excludeNumberWithDigit(p1, 8)).to.be.true;
    expect(Filter.excludeNumberWithDigit(p1, 9)).to.be.true;
  });

  it("should return false if number does not contain specific digit", () => {
    const p1 = 1234;

    expect(Filter.excludeNumberWithDigit(p1, 5)).to.be.false;
    expect(Filter.excludeNumberWithDigit(p1, 6)).to.be.false;
    expect(Filter.excludeNumberWithDigit(p1, 7)).to.be.false;
    expect(Filter.excludeNumberWithDigit(p1, 8)).to.be.false;
    expect(Filter.excludeNumberWithDigit(p1, 9)).to.be.false;
  })
});

describe("Data", () => {
  it("sould return array", () => {
    const p1 = Data.generate(5, Filter.excludeNumberWithDigit, 6);

    expect(p1).to.be.a('array');
  });

  it("sould return array with specidied lengh", () => {
    const p1 = Data.generate(5, Filter.excludeNumberWithDigit, 6);

    expect(p1).to.have.length(25);
  });

  it("sould return array excluding numbers with specified digits", () => {
    const p1 = Data.generate(5, Filter.excludeNumberWithDigit, 6);

    for (let x of p1) {
      expect((x + '').split()).to.not.have.members([(6 + '')]);
    }
  });
});