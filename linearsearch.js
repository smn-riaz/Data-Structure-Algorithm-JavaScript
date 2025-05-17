// Give an array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if the target element is not found.


const findElement = (numArr,t) => {

    for(let i=0; i<numArr.length; i++){
        if(numArr[i] === t){
            return i
        }
    }
    return -1
}

// Time complexity : Big-O = O(n)

console.log(findElement([-5,2,10,4,6],20));