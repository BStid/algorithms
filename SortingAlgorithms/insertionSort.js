//Insertion Sort
//O(n)

function insertionSort(array){
    //length of array
    let length = array.length;
    //declare variables
    let value, i, j;

    for(i = 1; i < length; i++){
        //variable 'value' now equals the value of array[i]
        value = array[i];
        j = i - 1;

        //while j is greater than 0 and array[j] is greater than value...
        while(j >= 0 && array[j] > value){
            //the next index's element is now the value of the one before it
            array[j + 1] = array[j];
            //decrement j
            j--;
        }
        //if array[j] is less than the value...
        array[j + 1] = value;
    }
    return array;
}