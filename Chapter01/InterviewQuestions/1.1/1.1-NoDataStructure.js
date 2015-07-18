// Is Unique:
// Implement an algorithm to determine if a string has all unique characters, 
// What if you cannot use additional data structures?
// Hints: #43, #116, #131

//----------------------------
// Using a hashmap
//----------------------------
var characterCount = [];
//should fail
var allLegalCharactersString = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcedfghijklmnopqrstuvwxyz0123456789";
var allUpperCaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var allLowerCaseString = "abcedfghijklmnopqrstuvwxyz";
var allNumbersString = "0123456789";
var invalidAllLegalCharactersString = "AABBCCDDEEFFGGHHIIJJKKLLMMNNOOPPQQRRSSTTUUVVWWXXYYZZaabbcceeddffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz00112233445566778899";
var invalidAllUpperCaseString = "AABBCCDDEEFFGGHHIIJJKKLLMMNNOOPPQQRRSSTTUUVVWWXXYYZZ";
var invalidAllLowerCaseString = "aabbcceeddffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz";
var invalidAllNumbersString = "00112233445566778899";

function isUnique(stringToProcess) {
    var duplicateFound = false;
    var errorString = "";
    console.log("\nValidating: " + stringToProcess);

    // Soooo, without a data structure my naive way would be to do it like I would do by hand
    // first I would look at the first index, then I would compare with the rest of the string
    // and then move forward, meaning that for n items i would be doing nxn - n^2 worth of work
    for(var i = 0; i < stringToProcess.length; i++) {
        for(var j = i + 1; j < stringToProcess.length; j++) {
            if(stringToProcess[i] == stringToProcess[j]) {
                errorString = "There has been a duplicate character encountered in the string passed in. This character is: " + stringToProcess[i] + ", at index: " + i + " and " + j;
                duplicateFound = true;
                break;
            }
        }
        if(duplicateFound) {
            break;
        }
    }

    if(duplicateFound) {
        console.error(errorString);
    }
    else {
        console.log("The string has passed, congratulations - it's a boy.")
    }
}

isUnique(allLegalCharactersString);
isUnique("A" + allLegalCharactersString);
