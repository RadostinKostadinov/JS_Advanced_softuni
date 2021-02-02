function solution(){
    
    let str = '';
    
    function append(string){
        str += string;
    }
    function removeStart(n){
        str = str.substring(n);
    }
    function removeEnd(n) {
        str = str.substring(0, str.length-n);
    }
    function print(){
        console.log(str);
    }
    
    const myObj = {
        append,
        removeStart,
        removeEnd,
        print
    };

    return myObj;

}
let firstZeroTest = solution();
let secondZero = solution();


firstZeroTest.append('123');
firstZeroTest.append('45');
firstZeroTest.removeStart(2);
firstZeroTest.removeEnd(1);

secondZero.append('hello');
secondZero.append('again');
secondZero.removeStart(3);
secondZero.removeEnd(4);

firstZeroTest.print();
secondZero.print();

// append(string) - append the given string at the end of the internal string
// removeStart(n) - remove the first n characters from the string, n is an integer
// removeEnd(n) - remove the last n characters from the string, n is an integer
// print - print the stored string on the console
