//Bubble Sort
//0(n)

const bubbleSort = array =>{
    //loop through the original array...
    for(let i = 0; i < array.length - 1; i++){
        let change = false;
        //loop through the whole array again for each element...
        for (let j = 0; j < array.length - (i + 1); j++){
            //if the current index is greater than the next index...
            if(array[j] > array[j + 1]){
                change = true;
                //switch the places of the indices
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
        if(!change) break;
    }
    return array;
}