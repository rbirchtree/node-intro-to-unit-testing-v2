const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function(){
	it('should print "fizz, buzz, fizzbuzz or not a num"', function(){
		const normalCases = [
			{a: 15, expected: 'fizz-buzz'},
			{a: 5, expected: 'buzz'},
			{a: 3, expected: 'fizz'},
			{a: 4, expected: 4},
		];
		normalCases.forEach(function(input){
			const answer =  fizzBuzzer(input.a);
			expect(answer).to.equal(input.expected);

			//normal case
		});
	});
	it('should raise error if it does not print fizz, buzz, or fizz-buzz or a num');
		const badInputs = ['a', true];
		badInputs.forEach(function(input){
			expect(function(){
				fizzBuzzer(input).to.throw(error);
			});
		});

	//wrong case
});