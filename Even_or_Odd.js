function checkIfEvenOrOdd(num){
    if(num%2==0){
        return `The number is even ${num}`
    }else{
        return `The number is odd ${num}`
    }
}

function checkingNumber(a){
    return a % 2 == 0 ? "Even" : "Odd"
}

console.log(checkIfEvenOrOdd(34));