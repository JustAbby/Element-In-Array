function myElements(array, num){
    if(array == null) {
        return "No array";
    }

    if(num == null) {
        return array[0];
    }
    return array.slice([0, num]);
}

console.log(myElements([7, 9, 0, -2]));
console.log(myElements([], 3));
console.log(myElements([7, 9, 0, -2], 3));
console.log(myElements([7, 9, 0, -2], 6));
console.log(myElements([7, 9, 0, -2], -3));