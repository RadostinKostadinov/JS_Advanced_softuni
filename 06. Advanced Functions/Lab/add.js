function solution(num){
    const sum = num;

    function addNum(num){
        return sum + num;
    };

    return addNum;
}


let add = solution(5);
console.log(add(2));
console.log(add(3));
