// Insertion sort works by iterating through the array and sorting as it 
// iterates.Each forward iteration of 'i' will cause it to iterate backwards 
// from its current iteration and check each previous index if it's less than 
// the sorting predicate used. Then inserts it into the correct spot. This can 
// be done fromthe tail end of the array as well, or sorted from big to small, 
// in the same fashion.
var shuffleArray = require('./shuffleArray.js');

function insertionSort(array) {
    var new_array = array.slice(0);

    for(var i = 0; i < new_array.length; i++) {
        for(var j = i; j > 0; j--) {
            if(new_array[j] < new_array[j - 1]) {
                var temp = new_array[j - 1];
                new_array[j - 1] = new_array[j];
                new_array[j] = temp;
            }
        }
    }

    return new_array;
}

var example_array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
example_array = shuffleArray(example_array, 20);
console.log("\nUnsorted Array: " + example_array);
sorted_array = insertionSort(example_array);
console.log("  Sorted Array: " + sorted_array);
