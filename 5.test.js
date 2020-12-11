const { boardingPass, highestPass, findBoardingPass } = require("./5");
const passesList = require("./boardingPasses");

describe("boardingPass", () => {
  test("Given an input, returns the correct seat number", () => {
    expect(boardingPass("FBFBBFFRLR")).toBe(357);
    expect(boardingPass("BFFFBBFRRR")).toBe(567);
    expect(boardingPass("FFFBBBFRRR")).toBe(119);
    expect(boardingPass("BBFFBBFRLL")).toBe(820);
    console.log("Highest ID: ", highestPass(passesList));
    console.log("Possible passes:", findBoardingPass(passesList));
  });
});
