function evenPositionElement(array){
    const [...myArr] = array;
    const outputArr = [];
    for(let i = 0; i < myArr.length; i++){
        if(i % 2 == 0) outputArr.push(myArr[i]);
    }

    return outputArr.join(' ');
}

function evenPositionElement2(array){
    const [...myArr] = array;
    function isEvenIndex(_el, index){
        return (index % 2) == 0;
    }
    return outputArr = myArr.filter(isEvenIndex).join(' ');


}

console.log(evenPositionElement(['20', '30', '40', '50', '60']));
console.log(evenPositionElement(['5', '10']));
console.log('===========================');
console.log(evenPositionElement2(['20', '30', '40', '50', '60']));
console.log(evenPositionElement2(['5', '10']));