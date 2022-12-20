const { assert } = require("chai");
const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  const instance1 = new Word(`wrong`)
  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      expect(instance1).to.have.property("word");
    });

    it('should set the "word" property when a new word is created', function () {
      expect(instance1.word).to.equal(`wrong`);
      
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      expect(instance1.removeVowels()).to.equal(`wrng`)
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      expect.fail("replace with your code");
    });
  });

  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      expect.fail("replace with your code");
    });
  });
});
