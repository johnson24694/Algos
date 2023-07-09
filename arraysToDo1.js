// Push Front
// Given an array and an additional value, insert this value at the beginning of the array.
push1 = [5,7,2,3], 8
push2 = [99], 7
push3 = [2,66,85,126,-1,5], 59

function pushFront(arr, value) {
    for(var i=arr.length; i>0; i--){
        arr[i] = arr[i-1];        
    }
    arr[0] = value
    return(arr);
}

console.log(pushFront(push1, 8));
console.log(pushFront(push2, 7));
console.log(pushFront(push3, 59));


// Pop Front
// Given an array, remove and return the value at the beginning of the array. Prove the value is removed from the array by printing it. 
pop1 = [0,5,10,15]
pop2 = [4,5,7,9]

function popFront (arr) {
    let save = arr[0]
    for(let i = 0; i <arr.length; i++){
        arr[i] = arr[i+1];
    }
    arr.length = arr.length - 1
    console.log(arr)
    return save
}

console.log(popFront(pop1));
console.log(popFront(pop2));

// Insert At
// Given an array, index, and additional value, insert the value into array at given index. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).
insert1 = [100,200,5], 2, 311
insert2 = [9,33,7], 1, 42

function insertAt(arr, idx, val) {
    for(let i=arr.length; i>= idx; i--){
        arr[i] = arr[i-1]
    }
    arr[idx] = val
    return arr
}

console.log(insertAt(insert1,2,311));
console.log(insertAt(insert2,1,42));