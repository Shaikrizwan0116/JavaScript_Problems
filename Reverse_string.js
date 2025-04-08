function reverseString(inputString){

    if(typeof inputString !== "string"){
        throw new Error("Only strings are allowed");
    }
    let result = " ";
    for(let i=inputString.length-1; i>= 0; i--){
        result = result + inputString[i]
    }
    return result;
}

function reverseString2(inputString){
    const splittedInput = inputString.split('');
    const reverseString = splittedInput.reverse();
    const result = reverseString.join('');
    console.log(result);
}

console.log(reverseString("Things"));
console.log(reverseString("Software Development"));


function reverseString3(inputString){
    let result = " ";
    for(let i=inputString.length-1; i>=0;i--){
        result = result + inputString[i];
    }
    return result;
}
console.log(reverseString3("Fellow"))

function numbers(num){
    for(let i=num; i>=0; i--){
        console.log(i)
    }
}
console.log(numbers(10));