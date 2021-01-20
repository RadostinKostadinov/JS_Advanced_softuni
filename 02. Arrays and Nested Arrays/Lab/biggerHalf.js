function biggerHalf(array){
    const [...myArr] = array.map(Number);
    return myArr.sort((a,b) => a - b).slice(Math.trunc(myArr.length / 2));
}

console.log(biggerHalf([4, 7, 2, 5]));
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));