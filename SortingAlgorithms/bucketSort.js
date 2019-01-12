//InsertionSort used Within BucketSort
function insertionSort(array){
    let length = array.length;
    let value, i, j;

    for(i = 1; i < length; i++){
        value = array[i]
        j = i - 1;

        while(j >= 0 && array[j] > value){
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = value;
    }
    return array;
}


//bucketSort

function bucketSort(list,bucketCount){
    //find the minimum of the list array
    let min = Math.min.apply(Math,list);
    //create an empty buckets array
    let buckets = [];
    let bucket_count = bucketCount || 200;

    for(let i = 0; i < list.length; i++){
        //hash function 
        let newIndex = Math.floor( (list[i] - min) / bucket_count);
        //create a new array at the new index of buckets if it doesn't exists
        //push the element at index i of list onto the new index of buckets
        buckets[newIndex] = buckets[newIndex] || [];
        buckets[newIndex].push(list[i]);
    }

    let index = 0;
    for(let i = 0; i < buckets.length; i++){
        if(typeof buckets[i] !== "undefined"){
            //select the non-empty buckets
            insertionSort(buckets[i]);
            //sort the elements in the bucket
            for( let j = 0; j < bucket[i].length; j++){
                list[index++] = buckets[i][j]
            }
        }
    }
    return list;
}