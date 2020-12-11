const {
  testPassports,
  testPassports2,
  testPassports3,
} = require("./testPassports");
const passports = require("./passports");

function seperatePassports(data) {
  return data.split("\n\n");
}

function validatePassports(passports) {
  const regexArr = [/byr/, /iyr/, /eyr/, /hgt/, /hcl/, /ecl/, /pid/];
  const filteredPassports = passports.filter((passport) => {
    return regexArr.every((regex) => {
      return regex.test(passport);
    });
  });

  return filteredPassports.length;
}

function furtherValidate(passports) {
  const regexArr = [/byr/, /iyr/, /eyr/, /hgt/, /hcl/, /ecl/, /pid/];
  const filteredPassports = passports.filter((passport) => {
    return regexArr.every((regex) => {
      return regex.test(passport);
    });
  });

  const passportObjects = filteredPassports.map((passport) => {
    return {
      byr: passport
        .match(/byr:\S+/g)
        .join("")
        .slice(4),
      iyr: passport
        .match(/iyr:\S+/g)
        .join("")
        .slice(4),
      eyr: passport
        .match(/eyr:\S+/g)
        .join("")
        .slice(4),
      hgt: passport
        .match(/hgt:\S+/g)
        .join("")
        .slice(4),
      hcl: passport
        .match(/hcl:\S+/g)
        .join("")
        .slice(4),
      ecl: passport
        .match(/ecl:\S+/g)
        .join("")
        .slice(4),
      pid: passport
        .match(/pid:\S+/g)
        .join("")
        .slice(4),
    };
  });

  const furtherFilter = passportObjects.filter((passport) => {
    return checkPassport(passport);
  });
  //console.log(furtherFilter);
  return furtherFilter.length;
}

function checkPassport(passport) {
  const hclRegEx = /^#[0-9a-f]{6}/;
  const eclRegEx = /^(amb|blu|brn|gry|grn|hzl|oth)$/;
  const pidRegEx = /\d{9}/;
  const heightUnitRegex = /^(cm|in$)/;
  const passportHeightUnit = passport.hgt.slice(-2);
  const passportHeightNo = passport.hgt.slice(0, -2);
  if (+passport.byr < 1920 || +passport.byr > 2002) return false;
  if (+passport.iyr < 2010 || +passport.iyr > 2020) return false;
  if (+passport.eyr < 2020 || +passport.eyr > 2030) return false;
  if (!heightUnitRegex.test(passportHeightUnit)) return false;
  if (!hclRegEx.test(passport.hcl)) return false;
  if (!eclRegEx.test(passport.ecl)) return false;
  if (!pidRegEx.test(passport.pid)) return false;

  if (passportHeightUnit === "cm") {
    if (+passportHeightNo < 150 || +passportHeightNo > 193) return false;
  } else if (passportHeightUnit === "in") {
    if (+passportHeightNo < 59 || +passportHeightNo > 76) return false;
  }
  return true;
}

const testArray = seperatePassports(testPassports);
const testArray2 = seperatePassports(testPassports2);
const testArray3 = seperatePassports(testPassports3);

const passportArray = seperatePassports(passports);

module.exports = {
  validatePassports,
  testArray,
  passportArray,
  testArray2,
  testArray3,
  furtherValidate,
};
