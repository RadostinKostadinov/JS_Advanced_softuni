function smallestTwoNumbers(array) {
    const [...myArr] = array.map(Number);
    const [...outputArr] = myArr.splice(0, 2);
    for (const number of myArr) {
        if (number < outputArr[0]) {
            const last = outputArr[0];
            outputArr[0] = number;
            if(last < outputArr[1]) outputArr[1] = last;
        } else if(number < outputArr[1]) {
            outputArr[1] = number;
        } 
    }
    return outputArr.sort((a, b) => a - b).join(' ');
}

console.log(smallestTwoNumbers([30, 15, 50, 5]));
console.log(smallestTwoNumbers([3, 0, 10, 4, 7, 3]));