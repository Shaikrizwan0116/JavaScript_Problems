function calculateFactorial(num){
    let fact = 1;
    for(let i=num; i>=1; i--){
        fact = fact*i
    }
    return fact
}
console.log(calculateFactorial(5));


function calculateFactorial2(inputNumber){
    if(inputNumber<0){
        throw new Error("InputNumber should be greater than or equal to zero")
    }
    let result =1
    for(let i=1; i<=inputNumber;i++){
        result=result * i
    }
    return result;
}
console.log("4!",calculateFactorial2(4));
// console.log("-1",calculateFactorial2(-4));


//Recursion

function calculateFactorialUsingRecursion(inputNumber){
    if(inputNumber<0){
        throw new Error("Should be equal to zero or one")
    }
    if(inputNumber === 0 || inputNumber === 1){
        return 1
    }
    return inputNumber * calculateFactorialUsingRecursion(inputNumber-1);

}
