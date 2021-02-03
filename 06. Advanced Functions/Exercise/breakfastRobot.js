function solution() {

    const recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    };

    const robotSupplies = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    function restock(microelement, quantity) {
        robotSupplies[microelement] += Number(quantity);
        return 'Success';
    }
    function prepare(recipe, quantity) {
        const ingredientsNeeded = Object.entries(recipes[recipe]);
        ingredientsNeeded.forEach(ingredient => {
            ingredient[1] *= quantity;
        });

        for (const [ingredientName, quantity] of ingredientsNeeded) {
            if (robotSupplies[ingredientName] < quantity) {
                return `Error: not enough ${ingredientName} in stock`;
            }
        }
        for (const [ingredientName, quantity] of ingredientsNeeded) {
            robotSupplies[ingredientName] -= quantity;
        }

        return 'Success';
    }
    function report() {
        return `protein=${robotSupplies.protein} carbohydrate=${robotSupplies.carbohydrate} fat=${robotSupplies.fat} flavour=${robotSupplies.flavour}`;
    }

    const robot = {
        restock,
        prepare,
        report
    };

    return function (string) {
        const [command, element, quantity] = string.split(' ');
        return robot[command](element, quantity);
    };
}

let manager = solution();
manager('restock carbohydrate 10');
manager('restock flavour 10');
manager('prepare apple 1');
manager('restock fat 10');
manager('prepare burger 1');
manager('report');