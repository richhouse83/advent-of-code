const { formCount, alteredCount } = require("./6");
const practiceForms = require("./practiceForms");
const forms = require("./forms");

describe("formCount", () => {
  test("Returns the total number of positive answers", () => {
    expect(formCount(practiceForms)).toBe(11);
    console.log(formCount(forms));
  });
});

describe("alteredCount", () => {
  test("Returns answers to which all members of a group have answered yes", () => {
    expect(alteredCount(practiceForms)).toBe(6);
    console.log(alteredCount(forms));
  });
});
