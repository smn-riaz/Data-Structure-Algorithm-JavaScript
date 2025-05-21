// Given an array of integers, sort the array


function bubbleSort(arr) {

    for(let i = 0; i<arr.length; i++){
        for(let j = 0; j<arr.length-1; j++){
           if(arr[j]>arr[j+1]){
            let temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
           }
        }
    }

}

// Big O = O(n^2)

const arr = [8, 20, -2, 4, -6]

bubbleSort(arr)
console.log(arr);