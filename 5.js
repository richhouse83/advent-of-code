function highestPass(list) {
  const passes = list.split("\n");
  let highestId = 0;

  passes.forEach((pass) => {
    const id = boardingPass(pass);
    if (id > highestId) {
      highestId = id;
    }
  });
  return highestId;
}

function boardingPass(input) {
  const rowArray = [];
  const colArray = [];

  for (let i = 0; i <= 127; i++) {
    rowArray.push(i);
  }

  for (let i = 0; i <= 7; i++) {
    colArray.push(i);
  }

  for (char of input) {
    for (let i = 0; i < rowArray.length; i++) {
      if (char === "F") rowArray.pop();
      if (char === "B") rowArray.shift();
    }
    if (rowArray.length === 1) {
      for (let j = 0; j < colArray.length; j++) {
        if (char === "L") colArray.pop();
        if (char === "R") colArray.shift();
      }
      //console.log(rowArray, colArray);
    }

    //console.log(rowArray);
  }
  //console.log(rowArray[0] * 8 + colArray[0]);
  return rowArray[0] * 8 + colArray[0];
}

function findBoardingPass(list) {
  const passes = list.split("\n");
  let passesArray = [];

  passes.forEach((pass) => {
    const id = boardingPass(pass);
    passesArray[id] = id;
  });

  const filtered = [];

  for (let i = 0; i < passesArray.length; i++) {
    if (passesArray[i] === undefined) {
      filtered.push(i);
    }
  }

  return filtered;
}

module.exports = { boardingPass, highestPass, findBoardingPass };
