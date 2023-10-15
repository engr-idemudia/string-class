[![Travis Status](https://travis-ci.org/andela-rakpan/string-class.svg?branch=develop)](https://travis-ci.org/andela-rakpan/string-class.svg?branch=develop)
[![Coverage Status](https://coveralls.io/repos/github/andela-rakpan/string-class/badge.svg?branch=develop)](https://coveralls.io/github/andela-rakpan/string-class?branch=develop)

#string-class
Extends the javascript _String_ Class using prototype programming to support more string manipulations.


**Methods added to extend String Class**

>* **hasVowels** - Tests to see if a string contains vowels. Returns (boolean) true if vowels exist or false otherwise.

>* **toUpper** - Converts all characters to uppercase characters. (Return type = string).

>* **toLower** - Converts all characters to lowercase characters. (Return type = string).

>* **ucFirst** - Converts first character of a string to uppercase character. (Return type = string).

>* **isQuestion** - Checks if a string is a question (ends with '?'). Returns (Boolean) true if it ends with '?' or false otherwise.

>* **words** - Extracts the list of the words in a string, and return as an Array. (Return type = string).

>* **wordCount** - Counts the number of words in a string. (Return type - number).

>* **toCurrency** - Converts strings of numbers to currency representation. (Return type - string).

>* **fromCurrency** - Converts currency representation to number representation. (Return type = number).

>* **inverseCase** - Converts each letter to the inverse of its current case. (Return type - string).

>* **alternatingCase** - Converts each characters to alternating character cases. (Return type - string).

>* **getMiddle** - Determines the character(s) in the middle of a string. Returns (string) middle character(s). 

>* **numberWords** - Converts numeric literals to string literals (words). Returns numbers in words (string).

>* **isDigit** - Determines if the string is a digit. Returns (boolean) true if digit, false otherwise.

>* **doubleCheck** - Determines if a string contains double characters. Returns (boolean) true if it contains double characters, false otherwise.

**Run the test**
> - Run `npm test`

**Technologies Used**
* Javascript (ES6)
* Nodejs
* Mocha

**How to Contribute**
> - Fork or clone the repo to your folder.
> - Change directory: `cd string-class`
> - Run `npm install`
> - Create a feature branch and work on it.
> - Push to the remote branch.
> - Open a Pull Request to develop branch. 

**Limitations**
* The program does not run on webbrowsers.
* It is intended to be used by developers / technical persons.
