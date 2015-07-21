var shuffleArray = require('./shuffleArray.js');

function selectionSort(array) {
    var new_array = array.slice(0);

    var smallest_element_index = null;
    for(var i = 0; i < new_array.length; i++) {
        smallest_element_index = i;
        for(var j = i; j < new_array.length; j++) {
            if(new_array[smallest_element_index] > new_array[j]) {
                smallest_element_index = j;
            }
        }

        var temp = new_array[smallest_element_index];
        new_array[smallest_element_index] = new_array[i];
        new_array[i] = temp;
    }

    return new_array;
}

var example_array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
example_array = shuffleArray(example_array, 20);
console.log("\nUnsorted Array: " + example_array);
sorted_array = selectionSort(example_array);
console.log("  Sorted Array: " + sorted_array);
