//Quick Sort

const quickSort = array =>{
    //declare length
    const length = array.length
    //if length is less than 2, return the array
    if(length < 2) return array;

    //choose a pivot randomly
    const pivot = array[Math.floor(Math.random() * length)];

    //create a left, right, and equal empty array
    let left = [];
    let equal = [];
    let right = [];

    //for each element in the array...
    for(let element of array){
        //if the element is greater than the pivot, push that number in the 'right' array
        if(element > pivot) right.push(element);
        //else if it is less than the pivot... push in the left array
        else if(element < pivot) left.push(element);
        //otherwise, if equal... push in the equal array
        else equal.push(element);
    }

    //recursively run the 'quickSort' method again on the 'right' and 'left' array...
    //combine the results all together
    return quickSort(left).concat(equal).concat(quickSort(right));
}