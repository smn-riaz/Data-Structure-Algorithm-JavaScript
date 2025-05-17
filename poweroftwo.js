// const powerOfTwo = (n) => {
//     if (n < 1) return false;

//     for (let i = 0; 2 ** i <= n; i++) {
//         if (2 ** i === n) return true;
//     }
//     return false;
// };

// At most log₂(n) iterations → Time Complexity: O(log n)






// process - 2 - BitWise

const powerOfTwo = (n) => {
    if(n<1){
        return false
    }
return (n & (n-1)) === 0

}

// Time Complexity: O(1)

console.log(powerOfTwo(8));






// How Bitwise Power of Two Check Works

// Core Idea:
// -----------
// A power of two in binary has exactly one bit set to 1.

// Examples:
// Decimal  | Binary
// -------- | -------
// 1        | 0001
// 2        | 0010
// 4        | 0100
// 8        | 1000
// 16       | 10000

// Any number that is a power of two has this single-bit property.

// Bitwise Trick:
// ---------------
// To check if a number n is a power of two, use this expression:

//     (n & (n - 1)) === 0

// Why Does It Work?
// ------------------
// This works because:

// - For a power of two, the binary number has only one '1'.
// - Subtracting 1 from it flips the bits after the '1'.
// - Performing AND between n and (n - 1) gives 0.

// Example with 8:
// ----------------
// n     = 8    -> 1000 (binary)
// n - 1 = 7    -> 0111 (binary)
// n & (n - 1) = 1000 & 0111 = 0000

// So, (8 & 7) === 0 => 8 is a power of two.

// Example with 10:
// -----------------
// n     = 10   -> 1010 (binary)
// n - 1 = 9    -> 1001 (binary)
// n & (n - 1) = 1010 & 1001 = 1000 (non-zero)

// So, 10 is not a power of two.

// Final Code:
// ------------
// const powerOfTwo = (n) => {
//     return n > 0 && (n & (n - 1)) === 0;
// };

// Note:
// ------
// We add the condition `n > 0` to avoid 0 and negative values, because:
// - 0 & -1 = 0 (but 0 is NOT a power of two)