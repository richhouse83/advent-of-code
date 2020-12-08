const passwords = require("./passwords");

const passwordChecker = (passwords) => {
  let counter = 0;
  passwords.forEach((password) => {
    const numbers = password.match(/\d+/g);
    const letterToMatch = password.match(/.\:/g).join("").slice(0, 1);
    const passwordToCheck = password.split(" ").slice(-1).join();
    const matchRegEx = new RegExp(`${letterToMatch}`, "g");
    const matches = passwordToCheck.match(matchRegEx);
    if (matches) {
      if (matches.length >= +numbers[0] && matches.length <= +numbers[1]) {
        counter++;
      }
    }
  });
  return counter;
};

const passwordChecker2 = (passwords) => {
  let counter = 0;
  passwords.forEach((password) => {
    const numbers = password.match(/\d+/g).map((num) => +num - 1);
    const letterToMatch = password.match(/.\:/g).join("").slice(0, 1);
    const passwordToCheck = password.split(" ").slice(-1).join();
    const matches = numbers.filter((number) => {
      return passwordToCheck[number] === letterToMatch;
    });
    if (matches.length === 1) counter++;
  });
  return counter;
};

function makeList(string) {
  return string.split("\n");
}

const passwordsList = makeList(passwords);

module.exports = { passwordChecker, passwordChecker2, passwordsList };
