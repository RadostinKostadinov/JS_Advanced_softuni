function objectFactory(library, orders) {
    const outputArr = [];
    for (const order of orders) {

        const composed = Object.assign({}, order.template);
        for (const part of order.parts) {
            composed[part] = library[part]
        }

        outputArr.push(composed);
    }

    return outputArr;
}

const library = {
    print: function () {
        console.log(`${this.name} is printing a page`);
    },
    scan: function () {
        console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
        console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
};
const orders = [
    {
        template: { name: 'ACME Printer' },
        parts: ['print']
    },
    {
        template: { name: 'Initech Scanner' },
        parts: ['scan']
    },
    {
        template: { name: 'ComTron Copier' },
        parts: ['scan', 'print']
    },
    {
        template: { name: 'BoomBox Stereo' },
        parts: ['play']
    },
];

const myArr = objectFactory(library, orders);
console.log(myArr);
myArr[3].play('Na maika ti putkata', 'Podmokrih se');