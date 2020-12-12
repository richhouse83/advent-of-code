function formCount(input) {
  const groups = input.split("\n\n");
  let total = 0;
  const answers = groups.map((group) => {
    const people = group.split("\n");
    const answerObj = {};

    people.forEach((person) => {
      for (let char of person) {
        answerObj[char] += 1;
      }
    });
    for (let answer in answerObj) {
      total++;
    }
  });

  return total;
}

function alteredCount(input) {
  const groups = input.split("\n\n");
  let total = 0;
  const answers = groups.map((group) => {
    const people = group.split("\n");
    const answerObj = {};

    people.forEach((person) => {
      for (let char of person) {
        if (answerObj[char]) {
          answerObj[char]++;
        } else answerObj[char] = 1;
      }
    });
    for (let answer in answerObj) {
      //console.log(answer, answerObj[answer], people.length);
      if (answerObj[answer] === people.length) {
        total++;
      }
    }
  });

  return total;
}

module.exports = { formCount, alteredCount };
