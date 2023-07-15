// Remove Blanks
// Create a function that, given a string, returns all of that string’s contents, but without blanks. 

// remove1 = " Pl ayTha tF u nkyM usi c "
// remove2 = "I can not BELIEVE it's not BUTTER"

// function removeBlanks(string) {
//     let newString = string.split(" ").join("")
//     return newString
// }

// console.log(removeBlanks(remove1));
// console.log(removeBlanks(remove2));

// Get Digits
// Create a JavaScript function that given a string, returns the integer made from the string’s digits. 

// digits1 = "abc8c0d1ngd0j0!8"
// digits2 = "0s1a3y5w7h9a2t4?6!8?0"

// function getDigits(string) {
//     let newString = ""
//     for(let i in string) {
//         if(!isNaN(string[i])) {
//             newString += string[i]
//         }
//     }
//     return Number(newString);
//     }
    
//     console.log(getDigits(digits1));
//     console.log(getDigits(digits2));  


// Acronyms
// Create a function that, given a string, returns the string’s acronym (first letter of the word capitalized).

// acronym1 = " there's no free lunch - gotta pay yer way. "
// acronym2 = "Live from New York, it's Saturday Night!"

// function acronym(string) {
//     let stringAcronym = string.split(' ')
//     let newString = ''
//     for(let i in stringAcronym) {
//         if(stringAcronym[i].length > 0) {
//             newString += stringAcronym[i][0].toUpperCase()
//         }
//     }
//     return newString
// }

// console.log(acronym(acronym1));
// console.log(acronym(acronym2));


// Count Non-Spaces
// Create a function that, given a string, returns the number of non-space characters found in the string. 

// countNonSpaces1 = "Honey pie, you are driving me crazy"
// countNonSpaces2 = "Hello world !"

// function countNonSpaces(string) {
//     let counter = 0
//     for(let i in string){
//         if(string[i] != ' ') {
//             counter++
//         }
//     }
//     return counter
// }

// console.log(countNonSpaces(countNonSpaces1));
// console.log(countNonSpaces(countNonSpaces2));

// Remove Shorter Strings
// Create a function that, given an array of strings and a numerical value, returns an array that only contains strings longer than or equal to the given value.

// removeShorterStrings1 = (['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4)
// removeShorterStrings2 = (['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3)

// function removeShorterStrings(arr, len) {
//     let newStrings = []
//     let nextIndex = 0

//     for(let i in arr) {
//         if(arr[i].length >= len) {
//             newStrings[nextIndex++] = arr[i]
//         }
//     }
//     return newStrings
// }

// console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4));
// console.log(removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3));



