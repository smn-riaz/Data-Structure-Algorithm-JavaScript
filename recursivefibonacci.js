// Recursion is when a function calls itself

// base - a condition to terminate the recursion


function recursiveFibonacci (n){
    if(n<2){
        return n
    }
    return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
}


// Exponential Time Complexity O(2ⁿ).

// F(6) = F(5) + F(4)
//      = (F(4) + F(3)) + (F(3) + F(2))


console.log(recursiveFibonacci(0));
console.log(recursiveFibonacci(1));
console.log(recursiveFibonacci(2));
console.log(recursiveFibonacci(3));