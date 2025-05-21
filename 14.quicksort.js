const quickSort = (arr) => {
if(arr.length <=1) return arr

const pivot = arr[arr.length-1]

const left = []
const right = []

for(let i = 0; i<arr.length-1; i++){
    if(arr[i]<pivot){
        left.push(arr[i])
    } else {
        right.push(arr[i])
    }
}

return [...quickSort(left),pivot,...quickSort(right)]

}

// Big O = O(n)

const arr = [8, 20, -2, -6, 12, 9, 6]

const sortedArr = quickSort(arr)

console.log(sortedArr);