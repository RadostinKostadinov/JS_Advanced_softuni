function solve() {
    const [input, output] = Array.from(document.querySelectorAll('#exercise textarea'));
    const table = document.querySelector('table.table tbody');
    const [genBtn, buyBtn] = Array.from(document.querySelectorAll('button'));

    const rows = [];

    genBtn.addEventListener('click', () => {
        JSON.parse(input.value.trim()).forEach(objectFromInput => { // JSON.parse(input.value.trim()) -> RETURNS an array with objects, every object from this array includes information/values for one row.
            const objRow = createRow(objectFromInput);
            table.appendChild(objRow.rowEl);
            rows.push(objRow);
        });
    });

    buyBtn.addEventListener('click', () => {

        const outputNames = [];
        let totalPrice = 0;
        let avgDecFactor = 0;
        let totalCheckedArticles = 0;

        rows.forEach(row => {
            if (row.isChecked()) {
                const rowValues = row.getValues();
                if (!outputNames.includes(rowValues.name)) {
                    outputNames.push(rowValues.name);
                }
                totalPrice += Number(rowValues.price);
                avgDecFactor += Number(rowValues.decFactor);
                totalCheckedArticles++;
            }
        });

        avgDecFactor /= totalCheckedArticles;

        output.textContent = `Bought furniture: ${outputNames.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${avgDecFactor}`;
    });

    function createRow(data) {
        const img = e('img');
        img.src = data.img;

        const check = e('input');
        check.type = 'checkbox';


        const rowEl = e('tr',
            eTd(img),
            eTd(eP(data.name)),
            eTd(eP(data.price)),
            eTd(eP(data.decFactor)),
            eTd(check),
        );


        const result = {
            rowEl,
            isChecked,
            getValues
        };


        function isChecked() {
            return check.checked;
        }
        function getValues() {
            return data;
        }


        return result;
    }
    // ============= FUNCTIONS FOR CREATING AN ELEMENT ===================
    function e(type, ...content) {
        const result = document.createElement(type);

        content.forEach(c => {
            if (typeof c == 'string' || typeof c == 'number') {
                const node = document.createTextNode(c);
                result.appendChild(node);
            } else {
                result.appendChild(c);
            }
        });
        return result;
    }

    function eTd(content) {
        return e('td', content);
    }

    function eP(content) {
        return e('p', content);
    }
}