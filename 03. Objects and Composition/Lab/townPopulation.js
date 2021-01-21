function townPop(array){
    const [...myArray] = array;

    const townsPop = {};

    for (const info of myArray) {
        let [town, population] = info.split(' <-> ');
        population = Number(population);

        if(townsPop[town] == undefined) townsPop[town] = 0; 

        townsPop[town] += population;
    }

    const outputArr = [];
    for(const [town, population] of Object.entries(townsPop)) {
        outputArr.push(`${town} : ${population}`);
    }

    return outputArr.join('\n');
}
console.log(townPop(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
));