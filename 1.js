const string = require("./expenseReport");

function report(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    const numToLookFor = 2020 - numbers[i];
    if (numbers.indexOf(numToLookFor) !== -1) {
      return [numbers[i], numToLookFor];
    }
  }
}

function report2(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    const firstNum = 2020 - numbers[i];
    for (let j = i; j < numbers.length; j++) {
      if (numbers[j] < firstNum) {
        const secondNum = firstNum - numbers[j];
        if (numbers.indexOf(secondNum) !== -1) {
          return [numbers[i], firstNum - secondNum, secondNum];
        }
      }
    }
  }
}

function makeList(string) {
  return string.split("\n").map((num) => +num);
}

const list = makeList(string);

module.exports = { report, list, report2 };
