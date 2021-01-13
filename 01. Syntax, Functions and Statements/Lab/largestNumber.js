function largestNumber(numberOne, numberTwo, numberThree){
    numberOne = Number(numberOne);
    numberTwo = Number(numberTwo);
    numberThree = Number(numberThree);

    let largestNum = Math.max(numberOne, numberTwo, numberThree);

    console.log(`The largest number is ${largestNum}.`);
}

largestNumber(22,33,44,55);