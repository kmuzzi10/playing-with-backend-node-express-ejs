const fs = require("fs");
const path = require("path");

const movieNamesJson = JSON.parse(fs.readFileSync(path.resolve(__dirname, "movie_names.json"), "utf-8"));
const movieNamesList = movieNamesJson.map((elem) => elem.normalize("NFD").replace(/[\u0300-\u036f`~!#$-@%^&*()|+=÷¿?;.:'"\s,<>{}[\]\\/]/gi, ""));

/**
 *
 * @param {*} options
 * @returns {[*]}
 */
function movieNames(options) {
  function movieName() {
    if (options && options.maxLength > 1) {
      return generateMovieNameWithMaxLength();
    } else {
      return generateRandomMovieName();
    }
  }

  function generateMovieNameWithMaxLength() {
    let rightSize = false;
    let nameUsed;
    while (!rightSize) {
      nameUsed = generateRandomMovieName();
      if (nameUsed.length <= options.maxLength) {
        rightSize = true;
      }
    }
    return nameUsed;
  }

  function generateRandomMovieName() {
    return movieNamesList[randInt(movieNamesList.length)];
  }

  function randInt(lessThan) {
    return Math.floor(Math.random() * lessThan);
  }

  // no options = generate one movie name
  if (typeof options === "undefined") {
    return movieName();
  }

  // options is number = generate that many of movie names
  if (typeof options === "number") {
    options = { exactly: options };
  }

  // options supports: exactly, min, max, join
  if (options.exactly) {
    options.min = options.exactly;
    options.max = options.exactly;
  }

  // not a number = one name per string
  if (typeof options.namesPerString !== "number") {
    options.namesPerString = 1;
  }

  // not a function = return the raw name
  if (typeof options.formatter !== "function") {
    options.formatter = (name) => name;
  }

  // not a string = delimiter defaulted to space
  if (typeof options.separator !== "string") {
    options.separator = " ";
  }

  let total = options.min + randInt(options.max + 1 - options.min);
  let results = [];
  let token = "";
  let relativeIndex = 0;

  for (let i = 0; i < total * options.namesPerString; i++) {
    if (relativeIndex === options.namesPerString - 1) {
      token += options.formatter(movieName(), relativeIndex);
    } else {
      token += options.formatter(movieName(), relativeIndex) + options.separator;
    }
    relativeIndex++;
    if ((i + 1) % options.namesPerString === 0) {
      results.push(token);
      token = "";
      relativeIndex = 0;
    }
  }
  if (typeof options.join === "string") {
    results = results.join(options.join);
  }

  return results;
}

module.exports = movieNames;
movieNames.movieNamesList = movieNamesList; // exporting movie names list as it's often useful
