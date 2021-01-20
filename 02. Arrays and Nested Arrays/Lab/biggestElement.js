function biggestElement(matrix) {
    const [...myMatrix] = matrix;
    let biggest = Number.MIN_SAFE_INTEGER;
    for (const array of myMatrix) {
        for (const element of array) {
            if (biggest < element) biggest = element;
        }
    }
    return biggest;
}
console.log(biggestElement(
    [
        [20, 50, 10],
        [8, 33, 145]
    ]
));
console.log(biggestElement([[3, 5, 7, 12],
[-1, 4, 33, 2],
[8, 3, 0, 4]]
));     