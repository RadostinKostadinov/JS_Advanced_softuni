function townsToJSON(array){
    const [...myArray] = array;
    const header = myArray.shift().split('|').filter(a => a != '').map(a => a.trim());
    return JSON.stringify(myArray.map((line) => townConstructor(header, line)));
    
    function townConstructor(header, townInfo){
        const newTown = {};
        let myTownInfo = townInfo.split('|').filter(a => a != '').map(a => a.trim());
        myTownInfo.forEach(parseNumbers);
        header.forEach(addInfo);
        
        function addInfo(element, id){
            newTown[element] = myTownInfo[id];
        }

        function parseNumbers(element, id, array){
            if(!isNaN(element)) array[id] = Number(Number(element).toFixed(2));
        }
        return newTown;
    }
}
console.log(townsToJSON(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
));