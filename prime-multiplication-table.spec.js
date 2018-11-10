var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

var PrimeMultiplicationTable = require('./prime-multiplication-table');

describe('prime number multiplication table unit tests', function () {
	var primeMultiplicationTable = new PrimeMultiplicationTable;

	it('should return an array of the first 10 prime numbers', function () {
		primeMultiplicationTable.getPrimeNumbers(10).should.deep.equal([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
	});

	it('should return an empty array', function () {
		primeMultiplicationTable.getPrimeNumbers(null).should.deep.equal([]);
	});

	it('should return a row of the multiplication table for 3 prime numbers', function () {
		primeMultiplicationTable.getNextTableRow(2, [2, 3, 5]).should.deep.equal([2, 4, 6, 10]);
	});

	it('should return the the multiplication table for 2 prime numbers', function () {
		var table = primeMultiplicationTable.constructTable([2, 3]);
		table[0].should.deep.equal([2, 4, 6]);
		table[1].should.deep.equal([3, 6, 9]);
	});
});