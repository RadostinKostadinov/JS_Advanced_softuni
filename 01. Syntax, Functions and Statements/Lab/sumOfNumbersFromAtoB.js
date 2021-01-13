function sumOfNumbers(numberA, numberB){
    numberA = Number(numberA);
    numberB = Number(numberB);
    let result = 0;

    for(let i = numberA; i <= numberB; i++){
        result += i;
    }
    console.log(result); 
}

sumOfNumbers('1', '5')