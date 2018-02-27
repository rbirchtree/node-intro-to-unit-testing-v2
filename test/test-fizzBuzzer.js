const expect = require('chai');

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
	
	//wrong case
});