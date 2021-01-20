function negPosNumbers(array){
    const [...myArr] = array.map(Number);
    const outputArr = [];
    for (const number of myArr) {
        if(number < 0){
            outputArr.unshift(number);
        } else {
            outputArr.push(number);
        }
    }    
    return outputArr.join('\n'); 
}
console.log(negPosNumbers([7, -2, 8, 9]));
console.log(negPosNumbers([3, -2, 0, -1]));