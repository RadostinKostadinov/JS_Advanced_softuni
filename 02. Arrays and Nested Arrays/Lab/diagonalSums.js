function diagonalSums(matrix) {
    const [...myMatrix] = matrix;
    const outputArr = [];

    function getPrimaryDiagonalEl(array, index){
        return array[index];
    }
    
    function getSecondaryDiagonalEl(array, index){
        return array[array.length - 1 - index];
    }
    outputArr.push(myMatrix.map(getPrimaryDiagonalEl).reduce((acc, el) => acc + el));
    outputArr.push(myMatrix.map(getSecondaryDiagonalEl).reduce((acc, el) => acc + el));
    return outputArr.join(' ');
}

console.log(diagonalSums([[20, 40],
[10, 60]]
));
console.log(diagonalSums([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
   ));