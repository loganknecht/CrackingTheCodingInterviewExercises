var shuffleArray = require('./shuffleArray.js');

function quickSort(array) {
    var new_array = array.slice(0);

    return new_array;
}

var example_array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
example_array = shuffleArray(example_array, 20);
console.log("\nUnsorted Array: " + example_array);
sorted_array = quickSort(example_array);
console.log("  Sorted Array: " + sorted_array);
