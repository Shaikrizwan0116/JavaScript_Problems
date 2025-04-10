function calculateSumOfDigits(inputNumber){
    let number = inputNumber;
    let sumOfDigit = 0;
    while(number > 0){
        let lastDigit = number % 10
        sumOfDigit = sumOfDigit + lastDigit
        number = Math.floor(number/10)
    }
    return sumOfDigit;

}

console.log(calculateSumOfDigits(1234));

function calculateSumOfDigits2(inputNum){
    if(inputNum < 1){
        throw new Error("inputNum should be positive number")
    }
    const inputNumAsString = inputNum.toString();
    const splittedInputString = inputNumAsString.split('');
    console.log(splittedInputString);
    let sumOfDigit = 0;

    splittedInputString.forEach(num=>{
        // console.log(parseInt(num));
        sumOfDigit += parseInt(num)
    }
    )
    return sumOfDigit

}

console.log(calculateSumOfDigits2(123));


function calculateSumOfDigits3(inputNumbers){
    let num = inputNumbers
    let sum = 0
    while(num > 0){
        let rem = num % 10
        sum = sum + rem
        num = parseInt(num / 10)
    }
    return `Sum of Digits ${sum}`
}

console.log(calculateSumOfDigits3(444));