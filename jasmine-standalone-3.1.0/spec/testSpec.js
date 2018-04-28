describe("calculate", function() {
	it("should return a sentence in the end", function() {
		expect(calculate()).toEqual('Hey .name., you are .age. years old.');
	});
});

describe("calculate", function() {
	it("should return a sentence in the end", function() {
		expect(calculate1()).toEqual('Hey .name., you are .age. years old.');
	});
});

/* I know that this is not what you expect, but I just wanted to try the Jasmine, but I 
had no good idea what to test from my function, so I tried it with a part of my 
function that is used in my codereview.

from line 1-5: test a function that should return the same sentence, in this case,
the function works.

from line 7-11 i test a function (the same like before), but now the return value
is different than the expected value, so there comes a failure in SpecRunner */