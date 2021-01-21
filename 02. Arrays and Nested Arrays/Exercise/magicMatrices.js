function magicMatrices(matrix) {
    const [...myMatrix] = matrix;

    const sum = myMatrix[0].reduce((acc, val) => acc + val);
    let isMagic = true;

    function forEachMatrix(array, arrayIndex, matrix) {
        const currSum1 = array.reduce((acc, val) => acc + val);
        if (currSum1 != sum) isMagic = false;

        let currSum2 = 0;
        myMatrix.forEach((array) => currSum2 += array[arrayIndex]);
        if (currSum2 != sum) isMagic = false;
    }

    myMatrix.forEach(forEachMatrix);

    return isMagic;
}

console.log(magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
));
console.log(magicMatrices([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
));
console.log(magicMatrices([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
));