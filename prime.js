// A prime number is a natural number greater than 1 that is not a product of two small natural numbers

// Process - 1

// const primeNumber = (n) => {
// if(n<2){
//     return false
// }

// for(let i = 2; i<n; i++){
//     if(n%i === 0){
//         return false
//     }
// }

// return true

// }

// Big-O = O(n) --- linear time complexity










// Process - 2

const primeNumber = (n) => {
if(n<2){
    return false
} 

for (let i = 2; i < Math.sqrt(n); i++){
if(n % i === 0){
    return  false
}

return true
}

}


// Big-O = O(sqrt(n))


console.log(primeNumber(5));