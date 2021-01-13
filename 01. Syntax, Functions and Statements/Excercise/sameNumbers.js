function sameNums(number) {
    number = number.toString();
    let isSame = true;
    let total = 0;
    for (let i = 0; i < number.length; i++) {
        if (number[i] != number[i + 1] && i + 1 < number.length) isSame = false;
        total += Number(number[i]);
    }
    return  `${isSame}\n`+
            `${total}`

}
console.log(sameNums(1234))