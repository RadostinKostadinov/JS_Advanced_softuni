function processOddPositions(array){
    const [...myArr] = array;
    
    function isOddIndex(_el, index){
        return index % 2 == 1;
    }

    function double(number){
        return number*2;
    }

    return myArr.filter(isOddIndex).map(double).reverse();
}
console.log(processOddPositions([10, 15, 20, 25]));
console.log(processOddPositions([3, 0, 10, 4, 7, 3]));