function lastKNSq(n, k){
    const [massiveLength, numOfAddends] = [n, k].map(Number);
    const outputArr = [1];
    function isLenghtLowerThanAddends(array, addends){
        const [myAddends, ...myArr] = [addends, array];
        return myArr.length < addends ? 0 : myArr.length - addends;
    }
    while(outputArr.length < massiveLength){
        outputArr.push(outputArr.slice(isLenghtLowerThanAddends(outputArr, numOfAddends)).reduce((acc, currVal) => acc + currVal));
    }
    return outputArr
}

console.log(lastKNSq(6,3));
console.log(lastKNSq(8,2));