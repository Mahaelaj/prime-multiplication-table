'use strict';
const Table = require('cli-table');
class PrimeMultiplicationTable {

	start() {

		// the user should only pass in 1 argument at most
		if (process.argv.length > 3) {
			console.log('Only pass in 1 argument');
			return;
		}

		// default to 10 prime numbers if the user did not pass in the number of prime numbers to use
		const primes = this.getPrimeNumbers(process.argv[2] || 10);
		if (!primes.length) {
			console.log('Unable to create multiplication table')
			return;
		}

		// print the table
		console.log(this.constructTable(primes).toString());
	}

	/**
	 * get the prime numbers that will be used in the multiplication table
	 * @param {number} n - the number of prime number to return
	 * @returns {number[]} - an array with prime numbers
	 */
	getPrimeNumbers(n) {
		if (isNaN(n) || n < 1) return []
		const primes = [2];

		// a number is a prime if it is not divisible by other primes lower than the number in question.
		for (let i = 3; primes.length < n; i++) {
			if (primes.every(function (prime) { return i % prime != 0 })) {
				primes.push(i);
			}
		}
		return primes;
	}

	/**
	 * prepare the multiplication table that will printed
	 * @param {number[]} primes - the prime numbers
	 * @returns {Table} - the table that contains the multiplication table
	 */
	constructTable(primes) {
		const table = new Table({
			head: ['', ...primes]
		});
		for (let i = 0; i < primes.length; i++) {
			table.push(this.getNextTableRow(primes[i], primes));
		}
		return table;
	}

	/**
	 * calculate the values of a row for the multiplication table
	 * @param {number} n - the prime number that will be used as a factor for multiplication
	 * @param {number[]} primes - the prime numbers
	 * @returns {number[]} - the row that will be inserted into the table
	 */
	getNextTableRow(n, primes) {
		const row = [n];
		for (let i = 0; i < primes.length; i++) {
			row.push(n * primes[i]);
		}
		return row;
	}
}
module.exports = PrimeMultiplicationTable;

