function figureCreators() {
    class Figure {
        constructor(units = 'cm') {
            this.units = units;
        }

        get area() { };

        changeUnits(units) {
            this.units = units;
        }

        toString() {
            return `Figure units: ${this.units}`;
        }
    }

    class Circle extends Figure {
        constructor(radius) {
            super();
            this.radius = radius;
        }

        get area() {
            let result = Math.PI * this.radius * this.radius;
            if(this.units == 'm'){
                result /= 100;
            } else if(this.units == 'mm') {
                result *= 100;
            }
            return result;
        }

        toString() {
            let rad = this.radius;
            if(this.units == 'm') {
                rad /= 100;
            } else if(this.units =='mm'){
                rad *= 10;
            }
            return `Figures units: ${this.units} Area: ${this.area} - radius: ${rad}`;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            this.width = width;
            this.height = height;
        }

        get area() {
            let result = this.width * this.height;
            if(this.units == 'm'){
                result /= 100;
            } else if(this.units == 'mm') {
                result *= 100;
            }
            return result;
        }

        toString() {
            let wid = this.width;
            let hei = this.height;
            if(this.units =='m'){
                wid /= 100;
                hei /= 100;
            } else if(this.units == 'mm'){
                wid *= 10;
                hei *= 10;
            }

            return `Figures units: ${this.units} Area: ${this.area} - width: ${wid}, height: ${hei}`;
        }
    }

    let c = new Circle(5);
    console.log(c.area); // 78.53981633974483
    console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

    let r = new Rectangle(3, 4, 'mm');
    console.log(r.area); // 1200 
    console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

    r.changeUnits('cm');
    console.log(r.area); // 12
    console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

    c.changeUnits('mm');
    console.log(c.area); // 7853.981633974483
    console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50


    return {
        Figure,
        Circle,
        Rectangle,
    };
}
figureCreators();