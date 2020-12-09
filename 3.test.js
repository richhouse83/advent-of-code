const { toboggan, tobogganMore, practiceArray, puzzleArray } = require("./3");

describe("toboggan", () => {
  test("Will return the count of trees encountered when traversing the map", () => {
    expect(toboggan(practiceArray, 1, 3)).toBe(7);
    //console.log(toboggan(puzzleArray, 1, 3));
  });
});

describe("tobogganMore", () => {
  test("Will return a multiplication of all results", () => {
    expect(tobogganMore(practiceArray)).toBe(336);
    console.log(tobogganMore(puzzleArray));
  });
});
