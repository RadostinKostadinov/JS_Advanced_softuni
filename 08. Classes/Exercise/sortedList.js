class List {
    constructor() {
        this.listArr = [];
        this.size = 0;
    }

    add(element) {
        if (typeof element === 'number' && element != NaN) {
            this.listArr.push(Number(element));
            this.listArr.sort((a, b) => a - b);
            this.size++;
        }
    }

    remove(index) {
        if (typeof index === 'number' && index != NaN) {
            if (index >= 0 && index < this.listArr.length) {
                this.listArr.splice(index, 1);
                this.listArr.sort((a, b) => a - b);
                this.size--;
            } else {
                throw new Error('Invalid index.');
            }
        }
    }


    get(index) {
        if (typeof index === 'number' && index != NaN) {
            if (index >= 0 && index < this.listArr.length) {
                return this.listArr[index];
            } else {
                throw new Error('Invalid index.');
            }
        }
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
