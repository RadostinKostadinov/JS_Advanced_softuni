function listOfNames(array){
    const [...myArray] = array;
    myArray.sort((a, b) => a.localeCompare(b));
    
    function numeric(name, index){
        return `${index + 1}.${name}`;
    }

    return myArray.map(numeric).join('\n');
}
console.log(listOfNames(["John", "Bob", "Christina", "Ema"]));