function eqNeighbors(matrix) {
    const [...myMatrix] = matrix;
    let counter = 0;

    for(let i = 0; i < myMatrix.length; i++){
        if(i == myMatrix.length - 1){
            for(let y = 0; y < myMatrix[i].length; y++){
                if(myMatrix[i][y] === myMatrix[i][y+1]) counter++;
            }
        } else {
        for(let y = 0; y < myMatrix[i].length; y++){
            if(myMatrix[i][y] === myMatrix[i+1][y]) counter++;
            if(myMatrix[i][y] === myMatrix[i][y+1]) counter++;
        }
        }
    }

    return counter;
}
console.log(eqNeighbors([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]
));
console.log(eqNeighbors([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]
));