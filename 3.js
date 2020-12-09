const practiceMap = require("./practiceMap");
const map = require("./map");

const mapArray = (map) => {
  const mapArray = [];
  const lines = map.split("\n");
  lines.forEach((line) => {
    mapArray.push(line.split(""));
  });
  return mapArray;
};

const toboggan = (mapArray, longtitude, latitude) => {
  let treeCount = 0;
  for (let i = 1; i < mapArray.length; i++) {
    let long = i * longtitude;
    let lat = i * latitude;
    if (mapArray.length <= long) {
      break;
    }
    while (lat >= mapArray[long].length) {
      lat -= mapArray[long].length;
    }
    if (mapArray[long][lat] === "#") {
      treeCount++;
    }
  }

  return treeCount;
};

const tobogganMore = (mapArray) => {
  const coordsArray = [
    [1, 1],
    [1, 3],
    [1, 5],
    [1, 7],
    [2, 1],
  ];
  const resultArray = coordsArray.map((coord) => {
    return toboggan(mapArray, coord[0], coord[1]);
  });
  console.log(resultArray);
  const results = resultArray.reduce((a, b) => a * b);
  return results;
};

const practiceArray = mapArray(practiceMap);
const puzzleArray = mapArray(map);

module.exports = { practiceArray, puzzleArray, toboggan, tobogganMore };
