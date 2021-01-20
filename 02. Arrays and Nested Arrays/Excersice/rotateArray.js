function rotateArray(array, numsOfRotation){
    const [[...myArray], myNumsOfRot] = [array, numsOfRotation];

    for(let i = 0; i < myNumsOfRot; i++){
        let currentEl = myArray.pop();
        myArray.unshift(currentEl);
    }

    return myArray.join(' ');
}
console.log(rotateArray(['1', 
'2', 
'3', 
'4'], 
2
));
console.log(rotateArray(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
));