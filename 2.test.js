const { passwordChecker, passwordChecker2, passwordsList } = require("./2");

describe("passwordChecker", () => {
  test("When passed an array of valid and/or invalid passwords, returns the count of valid passwords", () => {
    expect(passwordChecker(["1-3 a: abcde"])).toBe(1);
    expect(passwordChecker(["1-3 b: cdefg"])).toBe(0);
    expect(
      passwordChecker(["1-3 a: abcde", "1-3 b: cdefg", "2-9 c: ccccccccc"])
    ).toBe(2);
  });
  //console.log(passwordChecker(passwordsList), passwordsList.length);
});

describe("passwordChecker2", () => {
  test("When passed an array of valid and/or invalid passwords, returns the count of valid passwords", () => {
    expect(passwordChecker2(["1-3 a: abcde"])).toBe(1);
    expect(passwordChecker2(["2-9 c: ccccccccc"])).toBe(0);
    expect(
      passwordChecker2(["1-3 a: abcde", "1-3 b: cdefg", "2-9 c: ccccccccc"])
    ).toBe(1);
  });
  //console.log(passwordChecker2(passwordsList), passwordsList.length);
});
