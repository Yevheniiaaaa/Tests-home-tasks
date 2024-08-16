// Importing the 'expect' function from the 'chai' library to perform assertions
//const { expect } = require('chai');
import { expect } from 'chai';

// Importing functions 'describe', 'beforeEach', 'afterEach' and 'it' from 'mocha' which is a test framework.
//const { describe, beforeEach, afterEach, it } = require('mocha');
import { describe, beforeEach, afterEach, it } from 'mocha';
// Importing the NumbersValidator class from the relative path '../app/numbers-validator'
// so we can test its methods.
//const NumbersValidator = require('../app/numbers-validator');
import NumbersValidator from '../../unit-tests-NumbersValidator/numbers_validator.js';
// 'describe' is used to group related tests together into a test suite.
// Here, it describes a suite of tests for the 'isNumberEven' method of NumbersValidator class.
describe('isNumberEven', function () {
  // Declaring a variable 'validator' outside of the 'beforeEach' and 'it' blocks
  // to make it accessible throughout this describe block.
  let validator;

  // 'beforeEach' is a hook that runs before each test ('it' block) within this 'describe' block.
  // It's usually used for setting up the test environment.
  beforeEach(function () {
    // Instantiates a new NumbersValidator object before each test and assigns it to 'validator'
    validator = new NumbersValidator();
  });

  // 'afterEach' is a hook that runs after each test. It is often used for cleanup activities.
  afterEach(function () {
    // Sets the validator variable to null to clean up memory after each test
    validator = null;
  });

  // 'it' is used for individual test cases - it includes the actual test.
  // The string argument describes what the test should do.
  it('should return true if number is even', function () {
    // Using 'expect' to assert that the 'isNumberEven' method returns true when
    // passed the even number 4. The '.to.be.equal(true)' is the actual assertion check.
    expect(validator.isNumberEven(4)).to.be.equal(true);
  });

  it('should return false if number is not even', function () {
    expect(validator.isNumberEven(5)).to.be.equal(false);
  });

  it('should throw an error when provided a string', () => {
expect(() => {
validator.isNumberEven('4');
}).to.throw('[4] is not of type "Number" it is of type "string"');
  });

describe('getEvenNumbersFromArray', function () {
  let validator;

  beforeEach(function () {
    validator = new NumbersValidator();
  });

  afterEach(function () {
    validator = null;
  });

  it('should get array an even numbers from the given array of numbers', function (){
    const input = [1,2,3,4,4,5,11];
    const expectedOutput = [2,4,4];
    const result = validator.getEvenNumbersFromArray(input);
    expect(result).to.deep.equal(expectedOutput);
}); 

  it('should get an empty array from the given array of numbers if there is no even number', function (){
    const input = [1,3,5,7];
    const expectedOutput = [];
    const result = validator.getEvenNumbersFromArray(input);
    expect(result).to.deep.equal(expectedOutput);
  })

  it('should throw an error with provided string', () => {
    expect(() => {
      validator.getEvenNumbersFromArray([1,2,'t',5]);
    }).to.throw(`[1,2,t,5] is not an array of "Numbers"`);
  });

})

describe('isAllNumbers', function(){
  let validator;

  beforeEach(function () {
    validator = new NumbersValidator();
  });

  afterEach(function () {
    validator = null;
  });

  it('should return true if all elements in an array are numbers', function() {
    const input = [1,2,3,4,5];
    expect(validator.isAllNumbers(input)).to.be.equal(true);
  });

  it('should return false if not all elements in an array are numbers', () => {
    const input = [1,2,'b',5];
    expect(validator.isAllNumbers(input)).to.be.equal(false);
  });

  it('should throw an error if input is not array', () => {
    expect(() => {
      validator.isAllNumbers('am');
    }).to.Throw('[am] is not an array');
  });
});

describe('isInteger', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('should return true if a value is an integer', () => {
    expect(validator.isInteger(4)).to.be.equal(true);
  });

  it('should return false if a value is not an integer', () => {
    expect(validator.isInteger(3.5)).to.be.equal(false);
  });

  it('should trow an error if a value is not a number', () => {
    expect(() => {
      validator.isInteger('am');
    }).to.Throw('[am] is not a number');
  });
  
})


 


  // Additional tests would follow for different test cases, such as testing if an odd number
  // returns false or if passing a non-number throws an error.
});