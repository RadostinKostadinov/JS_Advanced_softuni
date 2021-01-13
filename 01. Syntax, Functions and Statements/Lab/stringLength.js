function stringLength(stringOne, stringTwo, stringThree){
    stringOne = stringOne.toString();
    stringTwo = stringTwo.toString();
    stringThree = stringThree.toString();
    
    let totalLength = stringOne.length + stringTwo.length + stringThree.length;
    let averageLength = Math.floor(totalLength / 3);
    console.log(totalLength);
    console.log(averageLength);
}

stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');