
/* Binary Search Algorithm is a searching algorithm used in a sorted array by repeatedly dividing the search interval in half. The idea of binary search is to use the information that the array is sorted and reduce the time complexity to O(log N). */




// Given a sorted array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if the target element is not found.


function binarySearch(arr, target){

    let leftIndex = 0
    let rightIndex = arr.length - 1

    while(leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex+rightIndex)/2)

        if(target === arr[middleIndex]){
           return middleIndex 
        }
        if(target< arr[middleIndex]){
           rightIndex = middleIndex - 1 
        } else {
leftIndex = middleIndex + 1
        }

    }
    return -1
}

// Time complexity : Big-O = O(logn)


console.log(binarySearch([-5,2,4,6,10],10));
console.log(binarySearch([-5,2,4,6,10],6));
console.log(binarySearch([-5,2,4,6,10],2));
console.log(binarySearch([-5,2,4,6,10],20));
