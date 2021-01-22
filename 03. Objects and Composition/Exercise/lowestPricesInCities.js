function lowestPrices(array) {
    const [...myArray] = array;
    const products = {};

    myArray.forEach(addProducts);

    return Object.entries(products).map(printLowestPrices).join('\n');

    function printLowestPrices(array) {
        return `${array[0]} -> ${array[1].price} (${array[1].town})`;
    }

    function addProducts(productInfo) {
        let [town, product, price] = productInfo.split(' | ');
        price = Number(price);
        if (products[product] == undefined) {
            products[product] = {
                price: Number.MAX_SAFE_INTEGER
            }
        }

        if (products[product].town == town) {
            products[product].price = price;
        } else if (products[product].price > price) {
            products[product].price = price;
            products[product].town = town;
        }
    }
}
console.log(lowestPrices(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000'
    ]
));