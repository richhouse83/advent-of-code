const bagCount = require("./7");
const practiceBags = require("./practiceBags");
const bags = require("./bags");

describe("bagCount", () => {
  test("", () => {
    expect(bagCount(practiceBags)).toBe(4);
    console.log(bagCount(bags));
  });
});
