function solve(input) {
    let parse = JSON.parse(input)
    let str = '<table>\n'
    str += `   <tr>${Object.keys(parse[0]).map(x => `<th>${replace(x)}</th>`).join('')}</tr>\n` 
    parse.forEach( x => { str += `   <tr>${Object.values(x).map( x => `<td>${replace(x)}</td>`).join('')}</tr>\n` })
    str += '</table>'

    
    function replace(str) {
        return String(str)
            .replace(/&/g , '&amp;')
            .replace(/</g , "&lt;")
            .replace(/>/g , "&gt;")
            .replace(/"/g , "&quot;")
            .replace(/'/g , "&#39;")
    }
    return str
}

function solve2(input) {
    let parsed = JSON.parse(input)
    let outputStr = `<table>\n`;
    const keys = Object.keys(parsed[0]);
    outputStr += '   <tr>'
    for (let key of keys) {
        key += '';
        outputStr += `<th>${key.trim()}</th>`;
    }
    outputStr += '</tr>\n';

    for (const object of parsed) {
        const values = Object.values(object);
        outputStr += '   <tr>';
        for (let value of values) {
            value += '';
            outputStr += `<td>${value.trim()}</td>`
        }
        outputStr += '</tr>\n';
    }

    outputStr += '</table>';

    return outputStr;
}

console.log(solve2(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`
));
console.log(solve2(`[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`
));