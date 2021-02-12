function solve() {
    const myObj = {};
    const myObjProto = Object.getPrototypeOf(myObj);

    myObj.extend = function(template){
        for (const [key, value] of Object.entries(template)) {
            if(typeof value === 'function'){
                myObjProto[key] = value;
            } else {
                myObj[key] = value;
            }
        }
    };

    return myObj;
}