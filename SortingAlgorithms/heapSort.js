//Heap Sort
//0(n log n)

let length;

function maxHeapify(array, i){
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    let max = i;
    

    //if the 'left' number is less than 'length'
    //and the element specified as left is greater than the last index..
    if(left < length && array[left] > array[max]){
        //then max now equals the index specified for the left side
        max  = left;
    }

    if(right < length && array[right] > array[max]){
        max = right;
    }
    //if max does not equal the original 'i'...
    if(max != i){
        //swap the last element and the current greater number..
        swap(array, i, max);
        //run the function again
        maxHeapify(array, max);
    }
}

function swap(array, i, j){
    //temp variable holding the current value 
    let temp = array[i];

    //this value now becomes the the value of index 'j'
    array[i] = array[j];
    //index 'j' now becomes the value of 'temp'
    array[j] = temp;
}

function heapSort(array){
    length = array.length;


    for(let i = Math.floor(length / 2); i >=0; i--){
        maxHeapify(array, i);
    }

    for(i = length - 1; i > 0; i--){
        swap(array, 0, i);
        length--;

        maxHeapify(array, 0);
    }
}

let arr = [3,0,2,4,-1,4,1];

heapSort(arr);
console.log(arr);