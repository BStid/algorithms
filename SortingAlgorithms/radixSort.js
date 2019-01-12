//Radix Sort
 const radixSort = array =>{
    //find max number in the array and multiply is by 10
      const maxNum = Math.max(...array) * 10;
      let divisor = 10;
    
    //while the maxNum is greater than the divisor...
      while(divisor < maxNum){
    // create an array with a length of 10 and add an empty array to each element
        let buckets = [...Array(10)].map(()=> []);
    // for each number in 'array'...
    // push the number into the index of the 'buckets' array
        for(let num of array) {
            //take the remainer of the number that is pulled from the array's index...
            //divide that by divisor / 10
            //round that number down...
            //push that number into the newly found index
            buckets[Math.floor((num % divisor) / (divisor / 10))].push(num);
        }

    // combine all of the arrays together into one...
        array = [].concat.apply([], buckets);
    //multiply the divisor by 10 to increase the size of the radix
        divisor *= 10;
        }
        return array;
      }
 