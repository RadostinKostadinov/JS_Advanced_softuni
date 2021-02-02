function listProc(array){
    const [...myArr] = array;
    let myCollection = [];
    const myObj = {
        add: (element) => {
            myCollection.push(element);
        },
        remove: (element) => {
            let index = myCollection.indexOf(element);
            while(index != -1) {
                myCollection.splice(index, 1);
                index = myCollection.indexOf(element);
            }
        },
        print: () => {
            console.log(myCollection.join(','));
        }
    };

    for (const el of myArr) {
        const [command, string] = el.split(' ');
        myObj[command](string);
    }
}

listProc(['add hello', 'add again', 'remove hello', 'add again', 'print']);
listProc(['add pesho', 'add george', 'add peter', 'remove peter','print']);