function mathOperations(numberOne, numberTwo, string){
    numberOne = Number(numberOne);
    numberTwo = Number(numberTwo);
    string = string.toString();
    let result = 0;

    switch(string){
        case '+': {
            result = numberOne + numberTwo; 
        }break;
        case '-': {
            result = numberOne - numberTwo;
        }break;
        case '*': {
            result = numberOne * numberTwo;
        }break;
        case '/': {
            result = numberOne / numberTwo; 
        }break;
        case '%': {
            result = numberOne % numberTwo; 
        }break;
        case '**': {
            result = numberOne ** numberTwo;
        }break;

    }
    
    console.log(result);
}

mathOperations(3,5.5,'*');