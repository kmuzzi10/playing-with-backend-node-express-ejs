const assert = require("assert");
const randomMovieNames = require("../index.js");

describe("random-movie-names", function () {
  it("1- should return one name when called with no arguments", function () {
    const movieName = randomMovieNames();
    assert.ok(typeof movieName === "string", "name is a string");
    assert.ok(movieName.length, "name is not empty");
    assert.ok(movieName.indexOf(" ") === -1, "name does not contain spaces");
  });
  it("2- should return 5 words when called with the number 5", function () {
    const movieNames = randomMovieNames(5);
    assert.ok(movieNames.length === 5, "contains 5 elements");
  });
  it("3- should return between 5 and 10 names when called with min: 5 and max: 10", function () {
    const movieNames = randomMovieNames({ min: 5, max: 10 });
    assert.ok(movieNames.length >= 5 && movieNames.length <= 10);
  });
  it("4- returns result of variable length when called with min: 5 and max: 10", function () {
    let lengths = {};
    for (let i = 0; i < 100; i++) {
      const movieNames = randomMovieNames({ min: 5, max: 10 });
      lengths[movieNames.length] = true;
    }
    assert.ok(Object.keys(lengths).length > 1, "result varies in length");
  });
  it("5- should return 5 space separated names when join is used with exactly: 5", function () {
    let phrase = randomMovieNames({ exactly: 5, join: " " });
    assert.ok(typeof phrase === "string", "result is a string");
    assert.ok(phrase.match(/\S/), "result contains text, not just spaces");
    phrase = phrase.replace(/[\S]/g, "");
    assert.ok(phrase.length === 4, "result contains 4 spaces joining the 5 words");
  });
  it("6- should return 5 concatenated names when join is used with an empty string and exactly: 5", function () {
    let phrase = randomMovieNames({ exactly: 5, join: "" });
    assert.ok(typeof phrase === "string", "result is a string");
    assert.ok(phrase.match(/\w/), "result contains text, no spaces");
  });
  it("7- should return 5 names when called with exactly: 5 and join: false", function () {
    const movieNames = randomMovieNames({ exactly: 5, join: false });
    assert.ok(movieNames.length === 5, "contains 5 elements");
  });
  it("8- should return 5 names when called with exactly: 5 and join: null", function () {
    const movieNames = randomMovieNames({ exactly: 5, join: null });
    assert.ok(movieNames.length === 5, "contains 5 elements");
  });
  it("9- should only return names within the maxLength", function () {
    const maxNameSize = 10;
    const movieNames = randomMovieNames({ exactly: 10000, maxLength: maxNameSize });
    movieNames.forEach((movieName) => {
      assert.ok(movieName.length <= maxNameSize && movieName.length > 0, "result is smaller than max size: " + maxNameSize);
    });
  });
  it("10- should return 5 space separated names for each string if namesPerString is set to 5 and exactly > 1", function () {
    const movieNames = randomMovieNames({ exactly: 10, namesPerString: 5 });
    movieNames.forEach((string) => {
      stringSplitted = string.split(" ");
      assert.ok(stringSplitted.length === 5, "the i-th string contains 5 names");
    });
  });
  it("11- should reuturn 5 names separated by a separator for each string if namesPerString > 1, separator is defined as a string and exactly > 1", function () {
    const separator = "-";
    const movieNames = randomMovieNames({ exactly: 10, namesPerString: 5, separator });
    movieNames.forEach((string) => {
      stringSplitted = string.split(separator);
      assert.ok(typeof separator === "string", "separator is a string");
      assert.ok(stringSplitted.length === 5, "the i-th string contains 5 names");
    });
  });
  it("12- should return styled strings if formatter is defined as a function that returns a string", function () {
    formatter = (name) => name.toUpperCase();
    assert.ok(typeof formatter === "function", "formatter is a function");
    assert.ok(typeof formatter("test") === "string", "formatter returns a string");
    const movieNames = randomMovieNames({ exactly: 10, formatter });
    movieNames.forEach((movieName) => {
      assert.ok(movieName === movieName.toUpperCase(), "name is formatted");
    });
  });
});
