function fruit(fruit, weightGr, pricePerKg){
    fruit = fruit.toString();
    weightGr = Number(weightGr);
    pricePerKg = Number(pricePerKg);

    let weightKg = weightGr / 1000;
    let money = weightKg * pricePerKg;


    return `I need $${money.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${fruit}.`;
}
console.log(fruit('orange', 2500, 1.80));