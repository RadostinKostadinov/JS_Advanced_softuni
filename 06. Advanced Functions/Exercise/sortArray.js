function sortArray(array, order) {
    const [...myArray] = array;
    const sort = {
        asc: function(array){
            array.sort((a,b) => a-b);
            return array;
        },
        desc: function(array){
            array.sort((a,b) => b-a);
            return array;
        },
    };
    return sort[order](myArray);
}
console.log(sortArray([14, 7, 17, 6, 8], 'asc'));