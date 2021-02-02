function aAndVCalc(funcArea, funcVol, strParams) {
    const arrayWithParams = JSON.parse(strParams);
    const resultArr = [];

    for (const line of arrayWithParams) {
        const area = funcArea.call(line);
        const volume = funcVol.call(line);
        const myObj = {
            area,
            volume
        };
        resultArr.push(myObj);
    };

    return resultArr;
}

function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};

aAndVCalc(area, vol, `[
    { "x": "1", "y": "2", "z": "10" },
    { "x": "7", "y": "7", "z": "10" },
    { "x": "5", "y": "2", "z": "10" }
    ]`
);