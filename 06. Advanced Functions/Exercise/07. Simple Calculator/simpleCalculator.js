
// SOLUTION FOR JUDGE 100/100

// function solve(){
//     let elementOne, elementTwo, resultElement;

//     function init(selector1, selector2, resultSelector){
//         elementOne = document.querySelector(selector1);
//         elementTwo = document.querySelector(selector2);
//         resultElement = document.querySelector(resultSelector); 
//     }
//     function add(){
//         resultElement.value = Number(elementOne.value) + Number(elementTwo.value); 
//     }
//     function subtract(){
//         resultElement.value = Number(elementOne.value) - Number(elementTwo.value); 
//     }

//     return {
//         init,
//         add,
//         subtract,
//     };
// }
function solve(){
    document.getElementById('sumButton').addEventListener('click', add);
    document.getElementById('subtractButton').addEventListener('click', subtract);
    const elementOne = document.querySelector('#num1');
    const elementTwo = document.querySelector('#num2');
    const resultElement = document.querySelector('#result');

    function add() {
        resultElement.value = Number(elementOne.value) + Number(elementTwo.value);
    }
    
    function subtract() {
        resultElement.value = Number(elementOne.value) - Number(elementTwo.value);
    }
}



