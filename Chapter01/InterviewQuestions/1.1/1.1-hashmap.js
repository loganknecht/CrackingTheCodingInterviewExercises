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

function incrementCharacterCount(characterCountArray, character) {
    if(character.length > 1) {
        console.error('The character ' + character + ' is longer than one character.');
    }

    // If there are only the characters A-Z,a-z,0-9 in the string
    if(!character.search(/[^A-Za-z0-9]/g)) {
        console.error("You can only pass in alphanumeric characters (A-Z, a-z, or 0-9)");
    }

    // if it's not a number resets to zero 
    if(typeof(characterCountArray[character]) != "number") {
        characterCountArray[character] = 0;
    }

    characterCountArray[character]++;
}

// returns true if characterCountArray is less than one for the character passed in
// returns false if characterCountArray is greater than 1 for the character passed in
function validateCharacterCount(characterCountArray, character) {
    if(typeof(characterCountArray[character]) == "number" 
        && characterCountArray[character] > 1) {
        console.log('character: ' + character);
        console.log('# of occurrences: ' + characterCountArray[character]);
        console.log('typeof: ' + typeof(characterCountArray[character]));
        return false;
    }
    else {
        return true;
    }
}

function isUnique(stringToProcess) {
    console.log("Validating: " + stringToProcess);

    for(var i = 0; i < stringToProcess.length; i++) {
        var character = stringToProcess[i];
        // console.log("Validating on " + character);
        incrementCharacterCount(characterCount, character);
        if(!validateCharacterCount(characterCount, character)) {
            console.error("The character count array has encountered the character '" + character + " " + characterCount[character] + " number of times and as such that means it is not a unique character in the string");
            break;
        }
    }

    console.log("If you've hit this section the string has passed, congratulations - it's a boy.")
}
// Single cases
// incrementCharacterCount(characterCount, 'a');
// console.log("IsValid: " + validateCharacterCount(characterCount, 'a'));
// incrementCharacterCount(characterCount, ' ');

//------------------
// Should pass
//------------------
// isUnique(allUpperCaseString);
// isUnique(allLowerCaseString);
// isUnique(allNumbersString);
// isUnique(allLegalCharactersString);

//------------------
// Should fail
//------------------
// isUnique(invalidAllLegalCharactersString);
// isUnique(invalidAllUpperCaseString);
// isUnique(invalidAllLowerCaseString);
// isUnique(invalidAllNumbersString);