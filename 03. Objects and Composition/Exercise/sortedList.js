function createSortedList(){
    const list = {
        "numbers": [],
        "size": 0,
        "add": function (num){
            this.numbers.push(Number(num));
            this.size++;
            this.numbers.sort((a,b) => a-b);
        },
        "remove": function (index){
            index = Number(index);
            if(index >= 0 && index < this.numbers.length){
                this.numbers.splice(index, 1);
                this.size--;
                this.numbers.sort((a,b) => a-b);
            }   
        },
        "get": function (index){
            index = Number(index);
            if(index >= 0 && index <= this.numbers.length - 1){
                return this.numbers[index];
            }
        }
    }
    return list;
}
let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
