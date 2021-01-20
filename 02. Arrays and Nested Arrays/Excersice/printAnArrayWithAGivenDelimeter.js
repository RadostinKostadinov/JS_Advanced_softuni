function printAnArray(array, delimeter){
    const [[...myArr], myDel] = [array, delimeter];

    return myArr.join(`${delimeter}`);
}
console.log(printAnArray(['One', 
'Two', 
'Three', 
'Four', 
'Five'], 
'-'
));

console.log(printAnArray(['How about no?', 
'I',
'will', 
'not', 
'do', 
'it!'], 
'_'
));