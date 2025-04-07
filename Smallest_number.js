function checkingSmallestNumber(num1,num2,num3){
    if(num1<num2 && num1<num3){
        return `${num1} is smallest number`
    }
    else if(num2<num1 && num2<num3){
        return `${num2} is smallest number`
    }
    else{
        return `${num3} is smallest number`
    }
}

console.log(checkingSmallestNumber(2,4,1));