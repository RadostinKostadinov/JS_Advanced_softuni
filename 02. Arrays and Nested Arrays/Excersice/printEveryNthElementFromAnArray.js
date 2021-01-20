function printNth(array, step){
    const [[...myArr], myStep] = [array, step];

    function isNthEl(_val, index){
        return index % myStep == 0;
    }

    return myArr.filter(isNthEl);
}

console.log(printNth(['5', 
'20', 
'31', 
'4', 
'20'], 
2
));
console.log(printNth(['dsa',
'asd', 
'test', 
'tset'], 
2
));

console.log(printNth(['1', 
'2',
'3', 
'4', 
'5'], 
6
));