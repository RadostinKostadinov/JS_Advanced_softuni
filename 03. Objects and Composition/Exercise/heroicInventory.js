function heroicInventory(array) {
    const [...myArray] = array;
    const outputArr = [];

    function createHero(heroName, heroLevel, items) {
        const hero = {
            "name": heroName,
            "level": heroLevel,
            "items": items
        }
        return hero;
    }

    function createHeroes(heroInfo) {
        [name, level, items] = heroInfo.split(' / ');
        level = Number(level);
        items = items != undefined ? items.split(', ') : [];
        //outputArr.push({name, level, items});
        outputArr.push(createHero(name, level, items));
    }

    myArray.forEach(createHeroes);
    return JSON.stringify(outputArr);
}

console.log(heroicInventory(['Isacc / 25',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
));
console.log(heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']
));