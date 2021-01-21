function extract(array) {
    const [...myArray] = array.map(Number);

    function myRed(array, currentVal, currentIndex) {
        if (currentIndex == 0) {
            array.push(currentVal);
        } else if (array[array.length - 1] <= currentVal) array.push(currentVal);

        return array;
    }


    return myArray.reduce(myRed, []);
}

function extract2(array){
    const [...myArray] = array.map(Number);
    const outputArr = myArray.splice(0, 1);

    for (const number of myArray) {
        if(number >= outputArr[outputArr.length - 1]) outputArr.push(number);
    }

    return outputArr;

}

console.log(extract2([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
));
console.log(extract2([1,
    2,
    3,
    4]
));
console.log(extract2([20,
    3,
    2,
    15,
    6,
    1]
));
