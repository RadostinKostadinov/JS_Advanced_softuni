function juiceFlavors(array) {
    const [...myArr] = array;
    const quantitiesMap = new Map();
    const bottlesMap = new Map();

    myArr.forEach(line => {
        const [type, quantity] = line.split(' => ');
        addQuantity(type, quantity);
        addBottles(type);
    });
    printBottles();

    function addQuantity(type, quantity) {
        if (!quantitiesMap.has(type)) {
            quantitiesMap.set(type, 0);
        }

        quantitiesMap.set(type, quantitiesMap.get(type) + Number(quantity));
    }

    function addBottles(type) {
        const bottles = parseInt(quantitiesMap.get(type) / 1000);
        if (bottles > 0) {
            //add bottles to bottlesMap
            if (!bottlesMap.has(type)) {
                bottlesMap.set(type, 0);
            }
            bottlesMap.set(type, bottlesMap.get(type) + bottles);

            //remove used quantity from quantitiesMap
            quantitiesMap.set(type, parseInt(quantitiesMap.get(type) % 1000));
        };
    }

    function printBottles() {
        for (const [key, value] of bottlesMap) {
            console.log(`${key} => ${value}`);
        }
    }

}
juiceFlavors(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']
);
juiceFlavors(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']

);