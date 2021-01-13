function GCD(numberOne, numberTwo){
    numberOne = Number(numberOne);
    numberTwo = Number(numberTwo);
    let temp = 0;
    while (numberTwo !== 0) {
        temp = numberTwo;
        numberTwo = numberOne % numberTwo;
        numberOne = temp;
    }
    return numberOne;
}
console.log(GCD(18,19));