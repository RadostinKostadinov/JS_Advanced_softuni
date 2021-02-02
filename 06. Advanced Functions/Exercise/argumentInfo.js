function countArguments(){
    const args = Array.from(arguments);
    const countArgs = {};

    args.forEach(arg => {
        if(!countArgs.hasOwnProperty(typeof arg)) {
            countArgs[typeof arg] = 0;
        }
        console.log(`${typeof arg}: ${arg}`);
        countArgs[typeof arg]++;
    });

    const countArr = Object.entries(countArgs).sort(([typeA, countA],[typeB, countB]) => {
        return countB - countA;
    });
    for (const [type, count] of countArr) {
        console.log(`${type} = ${count}`);
    }

}
console.log(countArguments('cat', 42, function () { console.log('Hello world!'); }));