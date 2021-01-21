function sortAnArr(array) {
    const [...myArray] = array;

    function mySorting(nameOne, nameTwo){
        if(nameOne.length > nameTwo.length) {
            return 1;
        } else if (nameOne.length < nameTwo.length) {
            return -1;
        } else if (nameOne.length == nameTwo.length) {
            return nameOne.localeCompare(nameTwo);
        }
    }

    return myArray.sort(mySorting).join('\n');
}

console.log(sortAnArr(['alpha',
    'beta',
    'gamma']
));
console.log(sortAnArr(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']
));
console.log(sortAnArr(['test', 
'Deny', 
'omen', 
'Default']
));