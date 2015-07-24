// '1' -> 'a'
// '2' -> 'b'
// '3' -> 'c'
// ....

// given a string like '111' how many permutations are there?
// is it 'aaa'? is it 'ak'? is it 'ka'?

// create a solution that will provide a count of how many permutations can exist
// within a string that maps to these values
function buildCharacterDictionary() {
    return {
        '1': 'a',
        '2': 'b',
        '3': 'c',
        '4': 'd',
        '5': 'e',
        '6': 'f',
        '7': 'g',
        '8': 'h',
        '9': 'i',
        '10': 'j',
        '11': 'k',
        '12': 'l',
        '13': 'm',
        '14': 'n',
        '15': 'o',
        '16': 'p',
        '17': 'q',
        '18': 'r',
        '19': 's',
        '20': 't',
        '21': 'u',
        '22': 'v',
        '23': 'w',
        '24': 'x',
        '25': 'y',
        '26': 'z',
    }
}

globalCharacters = buildCharacterDictionary();

function parseNumberString(number_string) {
    var total_count = 0;
    var break_out = false;

    for(var i = 0; i < number_string.length; i++) {
        for(var j = 1; j <= number_string.length - i; j++) {
            // first start by iterating over the array from the first index
            // starting from the first index you will check if the first index is in global chars
            // if it is slice it and recursively perform this check
            //      if you recurse until the end of the string return +1
            // if it isn't don't move on, just stop break from the loop period
            var search_string = number_string.substring(i, j);
            if(globalCharacters.hasOwnProperty(search_string)) {
                var new_string = number_string.slice(j);
                if(new_string == '') {
                    total_count++;
                }
                else {
                    total_count += parseNumberString(new_string);
                }
            }
            else {
                break_out = true;
            }
        }
        break;
    }

    return total_count;
}

var test_string = '1'; // [ 'a' ] - 1
console.log('The string "' + test_string + '" has ' + parseNumberString(test_string) + ' total permutations.');
test_string = '11'; // [ 'aa', 'k' ] - 2
console.log('The string "' + test_string + '" has ' + parseNumberString(test_string) + ' total permutations.');
test_string = '111'; // [ 'aaa', 'ak', 'ka' ] - 3
console.log('The string "' + test_string + '" has ' + parseNumberString(test_string) + ' total permutations.');
test_string = '1111'; // [ 'aaaa', 'aak', 'aka', 'kaa', 'kk' ] - 5
console.log('The string "' + test_string + '" has ' + parseNumberString(test_string) + ' total permutations.');
test_string = '11111'; // [ 'aaaaa', 'aaak', 'aaka', 'akaa', 'kaaa', 'akk', 'kak', 'kka'] - 8
console.log('The string "' + test_string + '" has ' + parseNumberString(test_string) + ' total permutations.');
