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
