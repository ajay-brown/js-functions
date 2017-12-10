/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */
 var n = 500;
function numberToString(n) {
	var result = String(n);
	return result;
}


/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */
 var n = 1;
 function increase(n) {
 	n++ ;
 	return n;
 }


/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */
 var n = 100;
 function decrease(n) {
 	n-- ;
 	return n;
 }

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */
var x = 1;
var y = 2;
function add(x,y) {
	var result = x + y;
	return result;
}

/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */
var x = 500;
var y = 100;
function subtract(x,y) {
	var result = x - y;
	return result;
}

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */

var x = 2;
var y = 5;
function multiply(x,y) {
	var sum = x * y;
	return sum;
}

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */
var x = 10;
var y = 5;
function divide(x,y) {
	var result = x / y;
	return result;
}

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */
var x = 3;
function square(x) {
	var result = x * x;
	return result;
}

/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */

	var x = 4;
	var y = 7;
	var operation;
 function calculate(operation,x,y) {
 	if (operation === "add") {
	var sum = x + y;
	console.log(x + "+" + y + "=" + sum);
	return sum;
	}
	else if (operation === "subtract") {
		var sum = x - y;
	console.log(x + "-" + y + "=" + sum);
	return sum;
	}
	else if (operation === "multiply") {
		var sum = x * y;
	console.log(x + "*" + y + "=" + sum);
	return sum;
	} else if (operation === "divide") {
		var sum = x / y;
	console.log(x + "/" + y + "=" + sum);
	return sum;
	}
}

/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */
var a = 4;
var b = 2;
function isGreaterThan(a,b) {
	if (a > b) {
	return true;
} else {
	return false;
};
}

/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */
var a = 2;
var b = 4;
function isLessThan(a,b) {
	if (a < b) {
		return true;
	} else {
		return false;
	}
}
/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */
var a = 1;
var b = 1;
function areEqual(a,b){
	if (a===b) {
		return true;
	} else {
		return false;
	}
}

/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */
var a = 1;
var b = 2;
function minimum(a,b){
	var result = Math.min(a,b);
	return result;
}

/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */
var a = 1;
var b = 2;
function maximum(a,b){
	var result = Math.max(a,b);
	return result;
}
/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */
var n = 4;
function isEven(n) {
	if (n % 2 === 0) {
		return true;
	}
 else {
	return false;
	}
}

/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */
var n = 3;
function isOdd(n) {
	if (n % 2 != 0) {
		return true;
	} else {
		return false;
	}
}

/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */
var score = 50;
var total = 100;
function letterGrade(score,total) {
 if (score < 59) {
 	return "F";
} else if (score < 69 && score > 60) {
	return "D";
} else if (score < 79 && score > 70) {
	return "C";
} else if (score < 89 && score > 80) {
	return "B";
} else  {
	return "A";
	}
}

/**
 * Checks if a `restaurant` object has a `reviews` property.
 * If it does, increase the property's `reviews` value by 1.
 * If it does not, set the `reviews` value to 1.
 * @param {object} restaurant   represents a restaurant object
 * @return {object} restaurant
 */
var restaurant = [];
function incrementReviews(restaurant) {
if (restaurant.reviews === undefined) {
	restaurant.reviews = 1;
	return restaurant;
} else {
	restaurant.reviews++
	return restaurant;
	}
}
/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */
var word1 = "dog";
var word2 = "cat";
function combine(word1,word2) {
	var result = word1 + " " + word2;
	return result;
}

/**
 * Returns a circle object with the properties `circumference` and `area`.
 * Use Math.PI for the value π.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
 * @param {number} radius
 * @return {object} circle
 */
var radius = 5;
function createCircle(radius) {
	var circle = {circumference:0, area:0};
 circle.circumference = Math.PI * (radius + radius);
 circle.area = Math.PI * (radius * radius);
 return circle;
}
