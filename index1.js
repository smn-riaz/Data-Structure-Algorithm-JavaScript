// Fibonacci sequence
// The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding ones, usually starting with 0 and 1.

function fibonacci(n){
    const fib = [0,1]

    for(let i=2; i<n; i++){
        fib[i] = fib[i-1] + fib[i-2]
    }

    return fib

}


console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(7));


// Big-O = O(n) ; linear time complexity