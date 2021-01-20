function sumFirstLast(array){
    const [...myArr] = array.map(Number);
    return myArr[0] + myArr[myArr.length - 1];
}
console.log(sumFirstLast(['20', '30', '40'])); //60
console.log(sumFirstLast(['5', '10'])); //15