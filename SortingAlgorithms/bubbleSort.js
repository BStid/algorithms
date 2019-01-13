const bubbleSort = array =>{
    for(let i = 0; i < array.length - 1; i++){
        let change = false;
        for (let j = 0; j < array.length - (i + 1); j++){
            if(array[j] > array[j + 1]){
                change = true;
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
        if(!change) break;
    }
    return array;
}