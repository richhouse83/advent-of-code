const {
  validatePassports,
  testArray,
  testArray2,
  testArray3,
  passportArray,
  furtherValidate,
} = require("./4");

describe("validatePassports", () => {
  test("returns count of valid passports", () => {
    expect(validatePassports(testArray)).toBe(2);
  });
  //console.log(validatePassports(passportArray));
});

describe("furtherValidate", () => {
  test("returns fully validated passports", () => {
    //expect(furtherValidate(testArray2)).toBe(4);
    //expect(furtherValidate(testArray3)).toBe(0);
  });
  console.log(furtherValidate(passportArray));
});
