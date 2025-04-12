

function isPalindrome(inputString){
    // console.log(inputString.length);
    for(let i=0; i<=inputString.length/2; i++){
        if(inputString[i] !== inputString[inputString.length - 1 - i]){
            return false
        }
        return true;
    }
}

// console.log("Rizwan",isPalindrome("Rizwan"));
// console.log("madam",isPalindrome("madam"));

// function isPalindrome2(inputString) {
//     let result = "";
//     for (let i = inputString.length - 1; i >= 0; i--) {
//         result += inputString[i];
//     }
//     return result === inputString;
// }


function isPalindrome3(inputString){
    let result = "";
    for(let i=inputString.length-1; i>=0; i--){
        result += inputString[i];
    }
    return result === inputString
}

console.log("Rizwan",isPalindrome3("Rizwan"));
console.log("madam",isPalindrome3("madam"));
console.log("level",isPalindrome3("level"));
console.log("abba",isPalindrome3("abba"));

