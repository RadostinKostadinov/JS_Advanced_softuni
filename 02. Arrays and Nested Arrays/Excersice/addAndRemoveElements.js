function addRemEl(array){
    const [...myArr] = array;
    let counter = 0;
    const outputArr = [];
    
    const obj = {
        add: function() {
            outputArr.push(++counter);
        },
        remove: function() {
            counter++;
            outputArr.pop();
        }
    }

    myArr.forEach(element => {
        obj[element]();
    });

    return outputArr == "" ? `Empty` : outputArr.join('\n');
}

console.log(addRemEl(['add', 
'add', 
'add', 
'add']
));
console.log(addRemEl(['add', 
'add', 
'remove', 
'add', 
'add']
));
console.log(addRemEl(['remove', 
'remove', 
'remove']
));