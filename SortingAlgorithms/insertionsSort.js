function insertionSort(array){
    let length = array.length;
    let value, i, j;

    for(i = 1; i < length; i++){
        value = array[i];
        j = i - 1;

        while(j >= 0 && array[j] > value){
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = value;
    }
    return array;
}