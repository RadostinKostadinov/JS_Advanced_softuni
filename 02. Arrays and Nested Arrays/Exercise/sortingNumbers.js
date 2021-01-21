function sortingNumbers(array) {
    const [...myArray] = array;
    const [...ascending] = myArray;
    const [...descending] = myArray;
    ascending.sort((a, b) => a - b);
    descending.sort((a, b) => b - a);

    const outputArr = [];
    addAsc = true;

    while (outputArr.length != myArray.length) {
        if (addAsc) {
            outputArr.push(ascending.splice(0, 1)[0])
            addAsc = false;
        } else {
            outputArr.push(descending.splice(0, 1)[0])
            addAsc = true;
        }
    }

    return outputArr;
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));