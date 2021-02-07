class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    
    set x(x){
        this._x = x;
    }
    
    get x(){
        return this._x;
    }

    set y(y){
        this._y = y;
    }

    get y(){
        return this._y;
    }
    static distance(pointA, pointB) {
        return Math.sqrt((pointA.x - pointB.x) ** 2 + (pointA.y - pointB.y) ** 2);
    }
}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));
