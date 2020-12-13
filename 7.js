function bagCount(bagStr) {
  console.log("starts");
  const bagLists = bagStr.split("\n");
  const goldHoldingBags = new Set();
  bagLists.forEach((bagList) => {
    const bags = bagList.split(/\scontain\s|,/g);
    bags.forEach((bag, index) => {
      if (index !== 0 && /shiny gold bag/.test(bag)) {
        goldHoldingBags.add(bags[0].replace("bags", "bag").replace(".", ""));
      }
    });
  });
  let holdingBagsLength = 0;
  do {
    holdingBagsLength = goldHoldingBags.size;
    console.log(holdingBagsLength, goldHoldingBags.size);
    goldHoldingBags.forEach((holdingBag) => {
      bagLists.forEach((bagList) => {
        const bags = bagList.split(/\scontain\s|,\s/g);
        bags.forEach((bag, index) => {
          if (
            index !== 0 &&
            holdingBag ===
              bag.replace(/^\d\s/, "").replace("bags", "bag").replace(".", "")
          ) {
            goldHoldingBags.add(
              bags[0].replace("bags", "bag").replace(".", "")
            );
          }
        });
      });
    });
    console.log(goldHoldingBags);
  } while (holdingBagsLength !== goldHoldingBags.size);

  return goldHoldingBags.size;
}

module.exports = bagCount;
