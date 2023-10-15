// Require chai
const chai = require('chai');

const assert = chai.assert;

// Require String Class to Test
require('../src/string-class.js');

// Test suite for method hasVowels
describe('hasVowels', () => {
  it('should return true if the string contains vowels', () => {
    const word = 'Raphael';
    const errorMessage = `'${word}' contains vowels, should return true`;
    assert.equal(word.hasVowels(), true, errorMessage);
  });

  it('should return false if the string does not contains vowels', () => {
    const word = 'Try';
    const errorMessage = `'${word}' contains no vowel, should return false`;
    assert.equal(word.hasVowels(), false, errorMessage);
  });

  it('should return a boolean result', () => {
    const word = 'Andela';
    const errorMessage = 'Result should be a boolean value';
    assert.typeOf(word.hasVowels(), 'boolean', errorMessage);
  });
});

// Test suite for method toUpper
describe('toUpper', () => {
  it('should return all characters as uppercase characters', () => {
    const word = 'Raphael';
    const result = 'RAPHAEL';
    const errorMessage = `${word}' should return '${result}'`;
    assert.equal(word.toUpper(), result, errorMessage);
  });

  it('should return a string result', () => {
    const word = 'Andela';
    const errorMessage = 'Result should be a string value';
    assert.typeOf(word.toUpper(), 'string', errorMessage);
  });
});

// Test suite for method toLower
describe('toLower', () => {
  it('should return all characters as lowercase characters', () => {
    const word = 'RapHAEl';
    const result = 'raphael';
    const errorMessage = `'${word}' should return '${result}'`;
    assert.equal(word.toLower(), result, errorMessage);
  });

  it('should return a string result', () => {
    const word = 'Andela';
    const errorMessage = 'Result should be a string value';
    assert.typeOf(word.toLower(), 'string', errorMessage);
  });
});

// Test suite for method ucFirst
describe('ucFirst', () => {
  it('should return the first character as uppercase', () => {
    const word = 'raphael';
    const result = 'R';
    const errorMessage = `'${word}' should return '${result}'`;
    assert.equal(word.ucFirst()[0], result, errorMessage);
  });

  it('should not alter other characters after first character', () => {
    const word = 'raPHaEl';
    const result = 'RaPHaEl';
    const errorMessage = `${word}' should return '${result}'`;
    assert.equal(word.ucFirst(), result, errorMessage);
  });

  it('should return a string result', () => {
    const word = 'Andela';
    const errorMessage = 'Result should be a string value';
    assert.typeOf(word.ucFirst(), 'string', errorMessage);
  });
});

// Test suite for method isQuestion
describe('isQuestion', () => {
  it('should return true if the string is a question', () => {
    const question = 'Are you Human?';
    const errorMessage = `${question}' should return true`;
    assert.equal(question.isQuestion(), true, errorMessage);
  });

  it('should return false if the string is not a valid question', () => {
    const invalidQuestion = 'Are you? Human?';
    const errorMessage = `${invalidQuestion}' should return false`;
    assert.equal(invalidQuestion.isQuestion(), false, errorMessage);
  });

  it('should allow for some special characters (+ - .) in a question', () => {
    const validQuestion = 'Is the number -4.0 or +4.0?';
    const errorMessage = `${validQuestion}' should return true`;
    assert.equal(validQuestion.isQuestion(), true, errorMessage);
  });

  it('should return a boolean result', () => {
    const word = 'Andela';
    const errorMessage = 'Result should be a boolean value';
    assert.typeOf(word.isQuestion(), 'boolean', errorMessage);
  });
});

// Test suite for method words
describe('words', () => {
  it('should return a list of the words in the string, as an Array', () => {
    const sentence = 'This is Andela';
    const result = ['This', 'is', 'Andela'];
    const errorMessage = `${sentence}' should return '${result}'`;
    assert.equal(sentence.words(), `${result}`, errorMessage);
  });

  it('should extract words only and leave out special characters', () => {
    const sentence = 'This ?is _ !Andela';
    const result = ['This', 'is', 'Andela'];
    const errorMessage = `${sentence}' should return '${result}'`;
    assert.equal(sentence.words(), `${result}`, errorMessage);
  });

  it('should return an object', () => {
    const sentence = 'This is Andela';
    const errorMessage = 'Result should be an object';
    assert.equal(typeof sentence.words(), 'object', errorMessage);
  });

  it('should return an instance of an array', () => {
    const sentence = 'This is Andela';
    const errorMessage = 'Result should be an instance of an array';
    assert.equal(sentence.words() instanceof Array, true, errorMessage);
  });
});

// Test suite for method wordCount
describe('wordCount', () => {
  it('should return the number of words in the string', () => {
    const sentence = 'This is Andela';
    const result = 3;
    const errorMessage = `${sentence}' should return '${result}'`;
    assert.equal(sentence.wordCount(), result, errorMessage);
  });

  it('should return a number', () => {
    const sentence = 'This is Andela';
    const errorMessage = 'Result should be a number';
    assert.typeOf(sentence.wordCount(), 'number', errorMessage);
  });
});

// Test suite for method toCurrency
describe('toCurrency', () => {
  it('should return a currency representation of the String', () => {
    const currency = '123456.783';
    const result = '123,456.78';
    const errorMessage = `${currency}' should return '${result}'`;
    assert.equal(currency.toCurrency(), result, errorMessage);
  });

  it('should return a currency representation of the String', () => {
    const currency = '123.451';
    const result = '123.45';
    const errorMessage = `${currency}' should return '${result}'`;
    assert.equal(currency.toCurrency(), result, errorMessage);
  });

  it('should return an approximated currency of 2 decimal places', () => {
    const currency = '8423534.4578';
    const result = '8,423,534.46';
    const errorMessage = `${currency}' should return '${result}'`;
    assert.equal(currency.toCurrency(), result, errorMessage);
  });

  it('should return a string', () => {
    const currency = '123456.789';
    const errorMessage = 'Result should be a string';
    assert.typeOf(currency.toCurrency(), 'string', errorMessage);
  });
});

// Test suite for method fromCurrency
describe('fromCurrency', () => {
  it('should return a number representation of the Currency String', () => {
    const currency = '123,456.78';
    const result = 123456.78;
    const errorMessage = `${currency}' should return '${result}'`;
    assert.equal(currency.fromCurrency(), result, errorMessage);
  });

  it('should return a number representation of the Currency String', () => {
    const currency = '123.45';
    const result = 123.45;
    const errorMessage = `${currency}' should return '${result}'`;
    assert.equal(currency.fromCurrency(), result, errorMessage);
  });

  it('should return a number', () => {
    const currency = '123,456.789';
    const errorMessage = 'Result should be a number';
    assert.typeOf(currency.fromCurrency(), 'number', errorMessage);
  });
});

// Test suite for method inverseCase
describe('inverseCase', () => {
  it('should return each letter as an inverse of its current case', () => {
    const sentence = 'ThIs iS AndelA';
    const result = 'tHiS Is aNDELa';
    const errorMessage = `${sentence}' should return '${result}'`;
    assert.equal(sentence.inverseCase(), result, errorMessage);
  });

  it('should return a string', () => {
    const sentence = 'ThIs iS AndelA';
    const errorMessage = 'Result should be a string';
    assert.typeOf(sentence.inverseCase(), 'string', errorMessage);
  });
});

// Test suite for method alternatingCase
describe('alternatingCase', () => {
  it('should return the letters in alternating cases', () => {
    const word = 'Onomatopoeia';
    const result = 'oNoMaToPoEiA';
    const errorMessage = `${word}' should return '${result}'`;
    assert.equal(word.alternatingCase(), result, errorMessage);
  });

  it('should start with a lowercase', () => {
    const word = 'AnDELa';
    const result = 'a';
    const errorMessage = `'${word}' should return '${result}'`;
    assert.equal(word.alternatingCase()[0], result, errorMessage);
  });

  it('should return a string', () => {
    const word = 'Onomatopoeia';
    const errorMessage = 'Result should be a string';
    assert.typeOf(word.alternatingCase(), 'string', errorMessage);
  });
});

// Test suite for method getMiddle
describe('getMiddle', () => {
  it('should return the character in the middle of the string', () => {
    const word = 'Raphael';
    const result = 'h';
    const errorMessage = `${word}' should return '${result}')`;
    assert.equal(word.getMiddle(), result, errorMessage);
  });

  it('should return the character(s) in the middle of the string', () => {
    const word = 'Andela';
    const result = 'de';
    const errorMessage = `${word}' should return '${result}'`;
    assert.equal(word.getMiddle(), result, errorMessage);
  });

  it('should return a string', () => {
    const word = 'Onomatopoeia';
    const errorMessage = 'Result should be a string';
    assert.typeOf(word.getMiddle(), 'string', errorMessage);
  });
});

// Test suite for method numberWords
describe('numberWords', () => {
  it('should return the numbers in words', () => {
    const number = '12345';
    const result = 'one two three four five';
    const errorMessage = `${number}' should return '${result}'`;
    assert.equal(number.numberWords(), result, errorMessage);
  });

  it('should make use of only numbers in string', () => {
    const sentence = 'Cohort 21 Andela';
    const result = 'two one';
    const errorMessage = `${sentence}' should return '${result}'`;
    assert.equal(sentence.numberWords(), result, errorMessage);
  });

  it('should return a string', () => {
    const number = '12345';
    const errorMessage = 'Result should be a string';
    assert.typeOf(number.numberWords(), 'string', errorMessage);
  });
});

// Test suite for method isDigit
describe('isDigit', () => {
  it('should return true if the string is a digit', () => {
    const digit = '5';
    const errorMessage = `'${digit}' is a digit, should return true`;
    assert.equal(digit.isDigit(), true, errorMessage);
  });

  it('should return false if the string is not a digit', () => {
    const number = '56';
    const errorMessage = `'${number}' is not a digit, should return false`;
    assert.equal(number.isDigit(), false, errorMessage);
  });

  it('should return a boolean value', () => {
    const digit = '6';
    const errorMessage = 'Result should be a boolean value';
    assert.typeOf(digit.isDigit(), 'boolean', errorMessage);
  });
});

// Test suite for method doubleCheck
describe('doubleCheck', () => {
  it('should return true if a string contains double characters', () => {
    const word = 'feet';
    const errorMessage = `'${word}' has double characters, should return true`;
    assert.equal(word.doubleCheck(), true, errorMessage);
  });

  it('should return true if a string contains double characters', () => {
    const word = 'h  i';
    const errorMessage = `'${word}' has double characters, should return true`;
    assert.equal(word.doubleCheck(), true, errorMessage);
  });

  it('should return false if it does not contain double characters', () => {
    const word = 'andela';
    const errorMessage = `'${word}' should return false`;
    assert.equal(word.doubleCheck(), false, errorMessage);
  });

  it('should return a boolean value', () => {
    const word = 'ii';
    const errorMessage = 'Result should be a boolean value';
    assert.typeOf(word.doubleCheck(), 'boolean', errorMessage);
  });
});
