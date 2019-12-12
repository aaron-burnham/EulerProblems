let num = prompt("Enter a number: ");

//check if a number is prime
isPrime = (a) => {
    for (let i = 2; i < a; i++) {
        if (a%i == 0) {
            return false;
        } else {
            return true;
        }
    }
}

//find the largest prime factor of a number
function findLargePrime(num) {
    let largestPrime = 0
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            isPrime(num);
            if (isPrime(num)) {
                largestPrime = i;
            }
        }
    }
    console.log(largestPrime);
}