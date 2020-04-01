function mysteryScoping1() {
    var x = 'out of block';
    if (true) {
        var x = 'in block';
        console.log(x);
    }
    console.log(x);
}

// mysteryScoping1()
//     in block
//     in block
//Using var will declare a function-scope variable 

function mysteryScoping2() {
    const x = 'out of block';
    if (true) {
        const x = 'in block';
        console.log(x);
    }
    console.log(x);
}

// mysteryScoping2()
//     in block
//     out of block
// Constants are block-scope



function mysteryScoping3() {
    const x = 'out of block';
    if (true) {
        var x = 'in block';
        console.log(x);
    }
    console.log(x);
}
// mysteryScoping3()
// Trying to redeclare a constant with a var or let by the same name will also raise an error

function mysteryScoping4() {
    let x = 'out of block';
    if (true) {
        let x = 'in block';
        console.log(x);
    }
    console.log(x);
}
// mysteryScoping4()
//     in block
//     out of block
// let will declare a block_scope variable

function mysteryScoping5() {
    let x = 'out of block';
    if (true) {
        let x = 'in block';
        console.log(x);
    }
    let x = 'out of block again';
    console.log(x);
}

// mysteryScoping5()
// JavaScript will raise a SyntaxError if you try to declare the same let variable twice in one block.


function madLib (verb, adjective, noun) {
    let sentence = `We shall ${verb.toUpperCase()} the ${adjective.toUpperCase()} ${noun.toUpperCase()}.`;
    console.log(sentence);
}

// madLib('make', 'best', 'guac');
//"We shall MAKE the BEST GUAC."

function isSubstring(searchString, subString) {
    let boolean = searchString.includes(subString)
    console.log(boolean)
}

// isSubstring("time to program", "time")
//true

// isSubstring("Jump for joy", "joys")
//false

function fizzBuzz(array) {
    let new_array = [];
    for (let i = 0; i < array.length; i++) {
        if ( (array[i] % 3 === 0) !== (array[i] % 5 === 0) ) {
            new_array.push(array[i]);
        }
    }
    return new_array
}

// nums = fizzBuzz([1,2,3,4,5,6,7,8,9,10,11,12])
// console.log(nums)

function isPrime(number) {
    if (number < 2) {
        return false;
    }
    for (let num = 2; num < number; num++) {
        if (number % num === 0) {
            return false;
        }
        
    }
    return true;
}

// console.log(isPrime(2))
// // true
// console.log(isPrime(10))
// // false
// console.log(isPrime(15485863))
// // true
// console.log(isPrime(3548563))
// // false

function sumOfNPrimes(n) {
    let primes = [];
    var i = 2;
    while(primes.length < n) {
        if (isPrime(i)) {
            primes.push(i);
        }
        i++;
    }
    var count = 0;
    for (let i = 0; i < primes.length; i++) {
       count += primes[i];
    }
    return count
}

console.log(sumOfNPrimes(0))
// 0

console.log(sumOfNPrimes(1))
// 2

console.log(sumOfNPrimes(4))
// 17

