// Create a JavaScript program that defines a function called "multiplyByTwo" that takes one parameter: "num". The function should return the input number multiplied by two.

function multiplyByTwo(num) {
    return num * 2;
    }
    
 // Create a JavaScript program that defines a function called "divideByTwo" that takes one parameter: "num". The function should return the input number divided by two.
    
    function divideByTwo(num) {
    return num / 2;
    }
    
    
    // A function “findprime” is given with a parameter . Your function should print out all the prime from 1 till the number (parameter) present in the argument . 
    
    function findprime(num) {
    var primes = ""
    for (let i = 2; i <= num; i++) {
    let isPrime = true;
    for (let j = 2; j <= i / 2; j++) {
    if (i % j == 0) {
    isPrime = false;
    break;
    }
    }
    if (isPrime) {
    primes += i + " ";
    }
    }
    console.log(primes)
    }
    
    var result = multiplyByTwo(51);
    console.log(result);
    result = divideByTwo(51);
    console.log(result);
    findprime(97)