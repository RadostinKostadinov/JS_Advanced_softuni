function generateReport(colNames) {
    const checked = Array.from(document.querySelectorAll('thead tr th'));
    const tableEl = Array.from(document.querySelectorAll('tbody tr'));
    const output = document.getElementById('output');

    const resultArr = [];
    for (const row of tableEl) {
        const myObj = {};
        for (let i = 0; i < checked.length; i++) {
            if (checked[i].children[0].checked) {
                myObj[checked[i].children[0].name] = row.children[i].textContent;
            };
        };
        resultArr.push(myObj);
    };
    output.value = JSON.stringify(resultArr);
}