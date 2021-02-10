function autoEngCmp(array){
    const [...myArr] = array;
    const carsCollection = {};

    myArr.forEach(line => {
        const [brand, model, qty] = line.split(' | ');
        addCarToCollection(brand, model, Number(qty));
    });

    let output = [];
    for (const key of Object.keys(carsCollection)) {
        output.push(key);
        for (const [model, qty] of Object.entries(carsCollection[key])) {
            output.push(`###${model} -> ${qty}`);
        }
    };

    function addCarToCollection(brand, model, qty) {
        if(!carsCollection.hasOwnProperty(brand)){
            carsCollection[brand] = {};
        }
        if(!carsCollection[brand].hasOwnProperty(model)){
            carsCollection[brand][model] = 0;
        }

        carsCollection[brand][model] += qty;
    };

    return output.join('\n');
}
console.log(autoEngCmp(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
));