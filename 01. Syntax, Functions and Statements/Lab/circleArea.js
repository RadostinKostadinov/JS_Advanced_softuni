function circleArea(radius){
    let type = typeof radius;
    if(type === 'number' && !Number.isNaN(radius)) {
        let result = Math.pow(radius, 2) * Math.PI;
        console.log(result.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${type}.`);
    }
}

circleArea('name');