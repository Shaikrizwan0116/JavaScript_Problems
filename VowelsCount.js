function calculateVowelAndConsonant(inputString){
    inputString = inputString.toLowerCase();
    let vowel="aeiou";
    let consonant="bcdfghjklmnpqrstvwxyz";
    let vowelCount=0;
    let consonantCount=0;

    for(let i=0; i<=inputString.length; i++){
        if(vowel.includes(inputString[i])){
            vowelCount++
        }
        else if(consonant.includes(inputString[i])){

            consonantCount++
        }
        else{
            console.log(inputString[i]);
        }
    }

    return {vowelCount, consonantCount}
}

console.log(calculateVowelAndConsonant("Hello World"));