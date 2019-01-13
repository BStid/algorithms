//Quick Sort

const quickSort = array =>{
    const length = array.length
    if(length < 2) return array;

    const pivot = array[Math.floor(Math.random() * length)];

    let left = [];
    let equal = [];
    let right = [];

    for(let element of array){
        if(element > pivot) right.push(element);
        else if(element < pivot) left.push(element);
        else equal.push(element);
    }

    return quickSort(left).concat(equal).concat(quickSort(right));
}