var assert = require('chai').assert

// Example

// The purpose of this first exercise is just to show how 
// assertions work and how the homework should be carried out. 
// We'll do it together in class.

// Part EXAMPLE

// Write a function called addOne() that returns the input number, plus one. 

var addOne = function(num) {
	return num + 1
}

// Part 1

// Fix the following code so doubleNum(2) wil equal 4. 

var doubleNum = function(num) {
	return num * 2
}
console.log("part1")
console.log(doubleNum(2))

/**
 * PART 2
 *
 * Write a function called sum that takes two numbers as
 * inputs and computes the sum of those two numbers.
 */

 function sum (num1, num2){
 	return num1 + num2
 }
console.log("part2")
console.log(sum(2,3))

 // PART 2.5

// modify your sum() function so that it will return null
// if either of the inputs is not a number.

function sum(num1, num2){
	if ((typeof(num1)!="number")||(typeof(num2)!="number")){
		return null
	}
	return num1 + num2
}
console.log("part2.5")
console.log(sum(5,"cherry"))

// PART 3

// Write a function called average that takes two numbers
// as inputs and returns the average of the two. To avoid
// repeating yourself, use your sum function inside 
// of your average function.
function average (num1, num2){
	return (sum(num1, num2)/2)
}
console.log("part3")
console.log(average(10, 20))

// Part 4

// Write a function called isNegative that will tell 
// whether a number is negative or not.
function isNegative(number){
	if (number<0){
		return true
	}
	return false
}
console.log("part4")
console.log(isNegative(-1))


// Now, modify your sum function again, so that it 
// will return null if any of the inputs is negative.
// To avoid repeating yourself, use your isNegative 
// function inside your sum funciton ***
function sum(num1, num2){
	if ((typeof(num1)!="number")||(typeof(num2)!="number")||(isNegative(num1)===true)||(isNegative(num2))===true){
		return null
	}
	return num1 + num2
}

console.log(sum(-1,"joe"))

// Part 5

// Write a function that will find the minimum of four 
// input numbers. You can do it using nested if statements,
// boolean operators, or both (but not neither).
function minimum(num1, num2, num3, num4){
	if ((num1 < num2) && (num1 < num3) && (num1 < num4)){
      return num1
    }
    else if ((num2 < num3) && (num2 < num4)){
        return num2
    }
    else if (num3 < num4){
        return num3
    }
    else{
        return num4
    }
}

console.log("part5")
console.log(minimum(55,5,10,45))

// Part 6

// Using logical operators, write a function that will
// return true if either input is a string, but not 
// both or neither. 
function justOneString(input1,input2){
	if ( 
		((typeof(input1)==="string")&&(typeof(input2)!="string")) 
		|| 
		((typeof(input2)==="string")&&(typeof(input1)!="string"))
       ){
        return true
		}
		return false
}

console.log("part6")
console.log(justOneString("word",10))


// HARD MODE

// Part 7

// Write a function called doTwice that takes as input a 
// function and invokes that function twice. 

// For testing purposes, I've included some functions that
// modify global variables, although that's not a good
// pattern for production code.


var doTwice = function(func) {
	func()
    func()
}


var helloWorld = function() {
	console.log('hello world')
}


doTwice(helloWorld) // should print 'hello world' to the console twice. 


// Part 8

// Write a function called conditionallyInvoke that takes a function
// as input. It should invoke that input function only if 
// the value of a certain global variable, called ORACLE, is 
// "YES." Otherwise, it will does nothing.

var conditionallyInvoke = function(func) {
    if(ORACLE==='YES'){
        func()
    }

}

var ORACLE = 'NO'

conditionallyInvoke(helloWorld) // should do nothing

var ORACLE = 'YES'

conditionallyInvoke(helloWorld) // should print hello world


// EPIC MODE

// For parts 9 through 11, your only instructions are to make the tests pass.

// Part 9

var factory = function() {

}


// Part 10

var factory2 = function() {
	// you want more?
}
	
// Part 11

var factory3 = function(stuff) {
	// This can't be healthy...	
}

console.log('********************************************************************************************************************************************')
console.log('')
console.log('Test Results Below')
console.log('__________________')

var chai = require('chai'),
	expect = chai.expect
	should = chai.should
	assert = chai.assert

var NUMBER,
	ORACLE


function checkFuncBasics(name,argNum) {
	try {
		var func = eval(name)
	}
	catch(e) {
		assert.equal(undefined,name,'Make sure your function is called ' + name + ', case-sensitive.')
	}
	if (argNum) assert.equal(func.length,argNum,'Your function should take ' + argNum + ' argument(s) (that means inputs). Does it?')
}

describe('Function', function() {
	describe('#doubleNum()', function(){
		it('should return a doubled input', function(){
			checkFuncBasics('doubleNum',1)
			assert.equal(10, doubleNum(5))
		})
	})
	describe('#sum()', function(){
		it('should return the sum of two inputs', function(){
			checkFuncBasics('sum',2)
			assert.equal(19, sum(8, 11))
			assert.equal(104, sum(4, 100))
			assert.equal(6176, sum(867, 5309))
		})
	})
	describe('#sum()', function(){
		it('should return null if either input is not a number', function(){
			checkFuncBasics('sum',2)
			assert.equal(null, sum('867', 5309))
			assert.equal(null, sum(true, 5))
		})
	})
	describe('#sum()', function(){
		it('should return null if either input is negative', function(){
			checkFuncBasics('sum',2)
			assert.equal(null, sum(5,-5))
		})
	})
	describe('#average()', function(){
		it('should return the average of two inputs', function(){
			checkFuncBasics('average',2)
			assert.equal(10, average(8, 12))
			assert.equal(150, average(100, 200))
		})
	})
	describe('#isNegative', function(){
		it('should tell whether a number is negative or not', function(){
			checkFuncBasics('isNegative',1)
			assert.equal(false, isNegative(10))
			assert.equal(false, isNegative(0))
			assert.equal(true, isNegative(-999))
		})
	})
	describe('#minimum', function(){
		it('should find the minimum of four input numbers', function(){
			checkFuncBasics('minimum',4)
			assert.equal(0, minimum(1,2,4,0))
			assert.equal(-99, minimum(1000,-2,-99,50))
			assert.equal(-1000, minimum(-1000,-2,-99,50))
			assert.equal(-2, minimum(1000,-2,99,50))
		})
	})
	describe('#justOneString', function(){
		it('should return true if exactly one input is a string', function(){
			checkFuncBasics('justOneString',2)
			assert.equal(true, justOneString('a',5))
			assert.equal(true, justOneString(6,'dotron'))
			assert.equal(false, justOneString('peanut','butter'))
			assert.equal(false, justOneString(8,null))
		})
	})
	describe('#doTwice', function(){
		it('should take a function as input and invokes the function twice', function(){
			checkFuncBasics('doTwice',1)
			NUMBER = 12
			doTwice(function(){NUMBER += 1})
			assert.equal(NUMBER,14)
		})
	})
	describe('#conditionallyInvoke', function(){
		it('should invoke the input function if a global variable called ORACLE stores the string "YES"', function(){
			checkFuncBasics('conditionallyInvoke',1)
			NUMBER = 10
			ORACLE = 'NO'
			conditionallyInvoke(function(){NUMBER += 1})
			assert.equal(NUMBER,10)
			ORACLE = 'YES'
			conditionallyInvoke(function(){NUMBER += 1})
			assert.equal(NUMBER,11)

		})
	})
	describe('#factory', function(){
		it('should work as described below', function(){
			checkFuncBasics('factory')
			var str = 'factory()() should equal the string "hello world"'
			assert.typeOf(factory2(),'function',str)
			assert.equal('hello world', factory()(), str)
		})
	})
	describe('#factory2', function(){
		it('should work as described below', function(){
			var str = 'factory2()("you sly dog") should equal the string "you sly dog"'
			assert.typeOf(factory2(),'function',str)
			assert.equal('you sly dog', factory2()('you sly dog'), str)
			assert.equal(999, factory2()(999))
		})
	})
	describe('#factory3', function(){
		it('should work as described below', function(){
			var str = 'factory3("i have reached function nirvana")() should equal the string "i have reached function nirvana"'
			assert.typeOf(factory3(),'function',str)
			assert.equal('i have reached function nirvana', factory3('i have reached function nirvana')(), str)
			assert.equal(100, factory3(100)())
		})
	})
})
