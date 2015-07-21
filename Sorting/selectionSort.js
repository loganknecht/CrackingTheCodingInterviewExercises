var shuffleArray = require('./shuffleArray.js');

/**
 * [selectionSort - this algorithm works by creating an array index that represents 
 * an in place sort. This index starts at zero and iterates to the arrays length.
 * At each step of the iteration the algorithm locates the smallest element to fill
 * the presorted array. 
 * Imagine the x is the index that represents the end of the presorted array, and
 * that the 'o' characters are the presorted indices. Each iteration that new 'o'
 * is filled with the smallest remaining number in the array.
 * [x---]
 * [ox--]
 * [oox-]
 * [ooox]
 * [oooo]
 * @param  { Array } array [The array to sort.]
 * @return { Array }       [The sorted array. This returns a new array. ]
 */
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
