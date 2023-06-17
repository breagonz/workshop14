// ----- ONLY ODDS -----

//Create a JavaScript code that accepts an array of numbers
//returns a new array with only the odd numbers from the original array
//If only one odd number in array, return an array with that single value

//input array. filter numbers to get odds. expected output [11,15]
const array = [2, 4, 6, 8, 11, 20, 15, 22]
const oddNumbers = array.filter((num) => num % 2 ===1 );
console.log(oddNumbers)

// input array. filter numbers to get odds. expected output [1,3,5,7,9]
const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const oddNumbers1 = array1.filter((num) => num % 2 ===1 );
console.log(oddNumbers1)

// input array. filter numbers to get odds. expected output [55, 81, 21, 91]
const array2 = [70, 42, 55, 81, 21, 91, 34]
const oddNumbers2 = array2.filter((num) => num % 2 ===1 );
console.log(oddNumbers2)

// input array. filter numbers to get odds. expected output [11]
const array3 = [2, 4, 6, 8, 10, 11, 12]
const oddNumbers3 = array3.filter((num) => num % 2 ===1 );
console.log(oddNumbers3)

// ----- VOWEL VS. CONSONANT -----

//Create a JavaScript code that accepts a string of lowercase letters. 
//Print the word followed by how many consonants and vowels it has.
//"a", "e", "i", "o", and "u" are considered vowels. 
//Every other letter is considered a consonant.

//define vowles
//define others
//input 'hello', expected output 'hello has 3 consonants and 2 vowels'


function vowelCount(str){
    var count = 0;
    var vowles = 'aeiou'
    
    for (var i = 0; i <str.length; i++){
        if (vowles.indexOf(str[i]) >-1){
            count++
        }
    }
    return console.log("hello has 3 consonants and " + count + ' vowels.')
}

vowelCount('hello')

//input 'ukelele' , expected output '"ukelele has 3 consonants and 4 vowels"'
function vowelCount1(str){
    var count = 0;
    var vowles = 'aeiou'
    
    for (var i = 0; i <str.length; i++){
        if (vowles.indexOf(str[i]) >-1){
            count++
        }
    }
    return console.log("ukelele has 3 consonants and " + count + ' vowels.')
}

vowelCount1('ukelele')

//input 'awesome' , expected output ''awesome has 3 consonants and 4 vowels"

function vowelCount2(str){
    var count = 0;
    var vowles = 'aeiou'
    
    for (var i = 0; i <str.length; i++){
        if (vowles.indexOf(str[i]) >-1){
            count++
        }
    }
    return console.log('awesome has 3 consonants and ' + count + ' vowels.')
}

vowelCount2('awesome')

//input 'onomonopia' , expected output 'onomonopia has 4 consonants and 6 vowels'
function vowelCount3(str){
    var count = 0;
    var vowles = 'aeiou'
    
    for (var i = 0; i <str.length; i++){
        if (vowles.indexOf(str[i]) >-1){
            count++
        }
    }
    return console.log('onomonopia has 4 consonants and ' + count + ' vowels.')
}

vowelCount3('onomonopia')

// input 'textbook' , expected output 'textbook has 5 consonants and 3 vowels'

function vowelCount4(str){
    var count = 0;
    var vowles = 'aeiou'
    
    for (var i = 0; i <str.length; i++){
        if (vowles.indexOf(str[i]) >-1){
            count++
        }
    }
    return console.log('textbook has 5 consonants and ' + count + ' vowels.')
}

vowelCount4('textbook')

// ----- REVERSE ARRAY -----
//Use a for loop
//create a JavaScript code that creates a new array
//have it in reverse order.

//input [1,2,3] , expected results [3,2,1]
const array4 = [1, 2, 3]

const reversedArray = []

for(let i = array4.length - 1; i >= 0; i--) {
  const valueAtIndex = array4[i]
  
  reversedArray.push(valueAtIndex)
}

console.log(reversedArray)

// input [1, 3, 5, 7, 9, 11] , expected results [11, 9, 7, 5, 3, 1]
const array5 = [1, 3, 5, 7, 9, 11]

const reversedArray1 = []

for(let i = array5.length - 1; i >= 0; i--) {
  const valueAtIndex = array5[i]
  
  reversedArray1.push(valueAtIndex)
}

console.log(reversedArray1)

//input [20, 50, 30, 60, 200] , expected results [200, 60, 30, 50, 20]
const array6 = [20, 50, 30, 60, 200]
const reversedArray2 = []

for(let i = array6.length - 1; i >= 0; i--) {
  const valueAtIndex = array6[i]
  
  reversedArray2.push(valueAtIndex)
}

console.log(reversedArray2)

//input [1, -1, 2, -3, 5, -8, 13] , expected results [13, -8, 5, -3, 2, -1, 1]
const array7 = [1, -1, 2, -3, 5, -8, 13] 
const reversedArray3 = []

for(let i = array7.length - 1; i >= 0; i--) {
  const valueAtIndex = array7[i]
  
  reversedArray3.push(valueAtIndex)
}

console.log(reversedArray3)

// ----- FIZZBUZZ -----

//Create a JavaScript code that prints each number from 1 to 100 on a new line.
let num = 0;
while (num <= 100) {
 console.log(num);
 num++
}

//For each multiple of 3, print "Fizz" instead of the number.
let i;
for (i=1; i<=100; i++){
 if ((i%3) === 0)
 console.log("Fizz");
 else (console.log(i ))
}

//For each multiple of 5, print "Buzz" instead of the number.
let i1;
for (i=1; i<=100; i++){
 if ((i%5) === 0)
 console.log("Fizz");
 else (console.log(i))
}

//For numbers that are multiples of both 3 and 5, print "FizzBuzz" instead of the number.
let i2;
for (i=1; i<=100; i++){
 if ((i%15) === 0)
 console.log('FizzBuzz')
 else (console.log)(i)
}
