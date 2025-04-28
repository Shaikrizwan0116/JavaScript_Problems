function calculatePower(base, exponent){
    let result=1;
    for(let i=1; i<=exponent; i++){
        result = result * base
    }
    return result;
}

console.log("power of 2",calculatePower(2,3));
console.log("power of 5",calculatePower(5,3));
