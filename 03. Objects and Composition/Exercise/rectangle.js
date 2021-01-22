function rectangle(width, height, color){
    color = color[0].toUpperCase() + color.slice(1);
    const newRect = {
        width,
        height,
        color,
        "calcArea": function () {
            return this.width * this.height;
        }
    }
    return newRect;
}
let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
