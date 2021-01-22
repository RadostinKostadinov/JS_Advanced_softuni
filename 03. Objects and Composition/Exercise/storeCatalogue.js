function storeCatalogue(array) {
    const [...myArray] = array;

    const catalogue = {};

    myArray.sort((a, b) => a.localeCompare(b));
    myArray.forEach(updateCatalogue);

    return Object.entries(catalogue).map(printEach).join('\n');

    function updateCatalogue(line) {
        const [productName, price] = line.split(' : ');

        if (catalogue[productName[0]] == undefined) {
            catalogue[productName[0]] = {};
        }

        catalogue[productName[0]][productName] = Number(price);
    }

    function printEach(lineArr) {
        [letter, { ...products }] = lineArr;
        let outputLine = `${letter}`;
        for (const product in products) {
            if (Object.hasOwnProperty.call(products, product)) {
                const price = products[product];
                outputLine += `\n  ${product}: ${price}`;
            }
        }
        return outputLine;
    }
}
console.log(storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
));