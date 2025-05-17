function recursivefactorial (n) {
    if(n<2){
        return 1
    } 

    return n * recursivefactorial(n-1)
}

// linear time complexity O(n)

console.log(recursivefactorial(5));