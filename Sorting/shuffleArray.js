module.exports = function shuffleArray(array, shuffle_iterations) {
    var new_array = array.slice(0);

    for(var i = 0; i < shuffle_iterations; i++) {
        var index_one = Math.floor(Math.random() * new_array.length);
        var index_two = Math.floor(Math.random() * new_array.length);

        // catches corner case where it picks the same index
        while(index_one == index_two) {
            index_one = Math.floor(Math.random() * new_array.length);
            index_two = Math.floor(Math.random() * new_array.length);
        }

        var temp = new_array[index_one];
        new_array[index_one] = new_array[index_two];
        new_array[index_two] = temp;
    }

    return new_array;
};
