function calorieObject(array){
    const [...myArray] = array;
    const myObj = {};

    function myMap(element, index, array){
        if(index % 2 == 0) {
            myObj[element] = Number(array[index+1]);
        }
    }
    myArray.map(myMap);
    return myObj;
}
console.log(calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));