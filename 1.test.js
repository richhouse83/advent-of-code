const { report, report2, list } = require("./1");

describe("report", () => {
  test("Will take an array of numbers and return an array of any two numbers which sum to 2020", () => {
    expect(report([2020, 1, 0, 5])).toEqual([2020, 0]);
    expect(report([1721, 979, 366, 299, 675, 1456])).toEqual([1721, 299]);
    const toMultiply = report(list);
    console.log(toMultiply[0] * toMultiply[1]);
  });
});

describe("report2", () => {
  test("Takes an array and checks whether 3 numbers total 2020, if so, returns those three numbers", () => {
    expect(report2([2000, 8, 12])).toEqual([2000, 8, 12]);

    expect(report2([1721, 979, 366, 299, 675, 1456])).toEqual([979, 366, 675]);

    const toMultiply = report2(list);
    console.log(toMultiply, toMultiply[0] * toMultiply[1] * toMultiply[2]);
  });
});
