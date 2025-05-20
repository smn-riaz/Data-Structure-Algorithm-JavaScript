// Given a sorted array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if the target elements is not found.



function recursiveBinarySearch(arr, target){
return search(arr, target, 0, arr.length-1)
}

function search(arr, target, leftIndex, rightIndex) {
    if(leftIndex>rightIndex) {
        return -1
    }

    let middleIndex = Math.floor((leftIndex + rightIndex)/2)
    if(target === arr[middleIndex]){
        return middleIndex
    }

    if(target<arr[middleIndex]){
        search(arr, target, leftIndex, middleIndex-1)
    } else {
        search(arr, target, middleIndex+1, rightIndex)
    }
} 


// Big - O = O(logN)


console.log(recursiveBinarySearch([-5,2,4,6,10],10));
console.log(recursiveBinarySearch([-5,2,4,6,10],6));
console.log(recursiveBinarySearch([-5,2,4,6,10],2));
console.log(recursiveBinarySearch([-5,2,4,6,10],20));