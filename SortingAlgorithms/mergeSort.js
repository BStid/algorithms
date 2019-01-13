//Merge Sort
//O(n log n)

function mergeSort(array){
    const length = array.length;

    if(length === 1){
        return array;
    }

    //the middle item of the array
    const middle = Math.floor(array.length / 2);

    //all items to the left
    const left = array.slice(0,middle);

    //all items to the right
    const right = array.slice(middle);

    //recursively run through Merge Sort for both the left and right side
    //then merge both sides together...
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left,right){

    //array to be returned
    let result = [];
    let indexLeft = 0;
    let indexRight = 0;

    //while both array's lengths are greater than their declared index...
    while(indexLeft < left.length && indexRight < right.length){
        //if the value at the index for the left array is less than the right...
        if(left[indexLeft] < right[indexRight]){
            //push that value into the result array
            result.push(left[indexLeft]);
            indexLeft++;
        } else {
            result.push(right[indexRight]);
            indexRight++;
        }
    }

    //add the remaining part to the result
    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}