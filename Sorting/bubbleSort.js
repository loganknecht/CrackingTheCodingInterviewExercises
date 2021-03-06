var shuffleArray = require('./shuffleArray.js');

function bubbleSort(array) {
    var new_array = array.slice(0);

    var performed_swap = true;
    while(performed_swap) {
        performed_swap = false;
        for(var i = 0; i < new_array.length - 1; i++) {
            if(new_array[i] > new_array[i + 1]) {
                var temp = new_array[i];
                new_array[i] = new_array[i + 1];
                new_array[i + 1] = temp;

                performed_swap = true;
            }
        }
    }

    return new_array;
}

var example_array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
example_array = shuffleArray(example_array, 20);
console.log("\nUnsorted Array: " + example_array);
sorted_array = bubbleSort(example_array);
console.log("  Sorted Array: " + sorted_array);
