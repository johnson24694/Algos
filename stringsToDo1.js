// Remove Blanks
// Create a function that, given a string, returns all of that string’s contents, but without blanks. 

remove1 = " Pl ayTha tF u nkyM usi c "
remove2 = "I can not BELIEVE it's not BUTTER"

function removeBlanks(string) {
    let newString = string.split(" ").join("")
    return newString
}

console.log(removeBlanks(remove1));
console.log(removeBlanks(remove2));

