//Heap Sort
//0(n log n)

let length;

function maxHeapify(array, i){
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    let max = i;

    if(left < length && array[left] > array[max]){
        max  = left;
    }

    if(right < length && array[right] > array[max]){
        max = right;
    }
    if(max != i){
        swap(array, i, max);
        maxHeapify(array, max);
    }
}

function swap(array, i, j){
    let temp = array[i];

    array[i] = array[j];
    array[j] = temp;
}

function heapSort(array){
    length = array.length;

    for(let i = Math.floor(length / 2); i >=0; i -= 1){
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