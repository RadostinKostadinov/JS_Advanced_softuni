function pieceOfPie(array, stringOne, stringTwo) {
    const [[...myArr], myStrOne, myStrTwo] = [array, stringOne, stringTwo];
    const startIndex = myArr.indexOf(myStrOne);
    const lastIndex = myArr.indexOf(myStrTwo);
    return myArr.slice(startIndex, lastIndex + 1);
}
console.log(pieceOfPie(
    ['Pumpkin Pie',
        'Key Lime Pie',
        'Cherry Pie',
        'Lemon Meringue Pie',
        'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
));

console.log(pieceOfPie(
    ['Apple Crisp',
        'Mississippi Mud Pie',
        'Pot Pie',
        'Steak and Cheese Pie',
        'Butter Chicken Pie',
        'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie'
));
