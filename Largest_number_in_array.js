
function findLargestNumber(arrayOfNumbers){
    if(!arrayOfNumbers ||  arrayOfNumbers.length === 0){
        throw new Error("We need some numbers in the array!");
    }
    let biggestNumber = arrayOfNumbers[0];
    for(let i=1; i<arrayOfNumbers.length; i++){
        if(arrayOfNumbers[i] > biggestNumber){
            biggestNumber = arrayOfNumbers[i]
        }
    }
    return biggestNumber;
}

function findLargestNumber2(arrayOfNumbers){
    const maxNumber = Math.max(3,4,5,6,9)
    console.log(maxNumber);
}

console.log(findLargestNumber([1,2,37,5,8,9,1]));